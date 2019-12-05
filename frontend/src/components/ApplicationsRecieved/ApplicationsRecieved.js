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
        fetch('http://127.0.0.1:5000/students/roomApplication')
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                this.setState({list,result});
            })
            .catch(err=>{
                console.log(err);
            })
            console.log(this.applications);
    }
    render(){
        this.handleData();
        // const applications = this.state.applications.map((val,index)=>{
        //     return (
        //         <div className="applicationList-item">
        //             <div className="item-column-no">{index+1}</div>
        //             <div className="item-column-rollNo">{val.rollNo}</div>
        //             <div className="item-column-hostel">{val.hostelName}</div>
        //             <div className="item-column-applicantOptions">
        //                 <div className="value">
                                    
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // })
        return(
            <div className="appplicationList-body">
                <div className="applicationsList-content">
                    <PageTitle text="Applications Recieved"/>
                    <div className="applicationsList">
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default ApplicationsRecieved;