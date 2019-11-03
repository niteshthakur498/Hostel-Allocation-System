import React from 'react';

class OrderView extends React.Component{
    handleDelete(){
        console.log("Deleted");
        this.props.handleDelete(this.props.order._id);
    }
    handleStatus(){
        console.log("Completed");
        this.props.handleStatus(this.props.order._id);
    }
    render(){
        console.log(typeof this.props.order.orderTime);
        return(
            <div className="orderContainer">
                <div className="orderNo">
                    <div>Order #{this.props.index +1}</div>
                    <div className="status">{this.props.order.completed?"Completed":"In Progress"}</div>
                </div>
                <div className ="orderValues">
                    <div className="orderValue"><span className = "valueTitle">Order ID:  </span><span>{this.props.order._id}</span></div>
                    <div className="orderValue"><span className = "valueTitle">Name:  </span><span>{this.props.order.name}</span></div>
                    <div className="orderValue"><span className = "valueTitle">Email:  </span><span>{this.props.order.email}</span></div>
                    <div className="orderValue"><span className = "valueTitle">Address:  </span><span>{this.props.order.address}</span></div>
                    <div className="orderValue"><span className = "valueTitle">City:  </span><span>{this.props.order.city}</span></div>
                    <div className="orderValue"><span className = "valueTitle">Phone Number:  </span><span>{this.props.order.phone}</span></div>
                    <div className="orderValue"><span className = "valueTitle">Type:  </span><span>{this.props.order.pizzaType}</span></div>
                    <div className="orderValue"><span className = "valueTitle">Size:  </span><span>{this.props.order.pizzaSize}</span></div>
                    <div className="orderValue"><span className = "valueTitle">Dough:  </span><span>{this.props.order.pizzaDough}</span></div>
                    
                    <div className="orderStatus">
                        {
                            this.props.order.completed ?
                            '':
                            <div className="statusButton completeStatus" onClick = {this.handleStatus.bind(this)}><i className="fa fa-check"></i>Complete</div>
                        }
                        <div className = "statusButton deleteStatus" onClick = {this.handleDelete.bind(this)}><i className="fa fa-trash"></i>Delete</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderView;





