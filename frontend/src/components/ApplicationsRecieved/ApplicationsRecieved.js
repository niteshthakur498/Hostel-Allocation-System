import React from 'react';
import './ApplicationsRecieved.css'
import PageTitle from '../PageTitle/Pagetitle';

class ApplicationsRecieved extends React.Component{
    constructor(){
        super();
        this.state={
            list : []
        }
    }
    
    handleData = ()=>{
        
    }
    componentDidMount(){
        fetch('http://127.0.0.1:5000/students/roomApplication')
            .then(res=>res.json())
            .then(result=>{
                console.log(result.response);
                let ch = result.response;
                console.log(ch)
                this.setState({list:ch},()=>{
                    console.log(this.state)
                });
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        const applications = this.state.list.map((val,index)=>{
            val = JSON.parse(val)
            console.log(val)
            console.log(val.roomOptions);
            let opt = (val.roomOptions).map((v,i)=>{
                    return (<div key = {i}>
                        {v}
                    </div>)
                });
            return (
                <div className="applicationList-item" key={index}>
                    <div className="item-column-no">{index+1}.</div>
                    <div className="item-column-rollNo">{val.rollNo}</div>
                    <div className="item-column-hostel">{val.hostelName}</div>
                    <div className="item-column-applicantOptions">
                        {
                            opt
                        }
                    </div>
                </div>
            );
        })
        return(
            <div className="appplicationList-body">
                <div className="applicationsList-content">
                    <PageTitle text="Applications Recieved"/>
                    <div className="applicationsList">
                        <div className="applicationList-item applicationList-header">
                            <div className="item-column-no">Serial No</div>
                            <div className="item-column-rollNo">Roll No</div>
                            <div className="item-column-hostel">Hostel Name</div>
                            <div className="item-column-applicantOptions">
                                Room Options
                            </div>
                        </div>
                        {applications}
                    </div>
                </div>
            </div>
        );
    }
}


export default ApplicationsRecieved;