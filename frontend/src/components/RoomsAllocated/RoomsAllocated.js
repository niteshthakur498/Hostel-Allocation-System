import React from 'react'
import './RoomsAllocated.css'

import PageTitle from '../PageTitle/Pagetitle';

class RoomsAllocated extends React.Component{
    constructor(){
        super();
        this.state={
            cgpi:[],
            rooms:[],
            applictions:[]
        }
    }
    extractCGPI(){
        fetch('http://127.0.0.1:5000/students/getcgpi')
            .then(res=>res.json())
            .then(result=>{
                console.log(result.response);
                let ch = result.response;
                this.setState({cgpi:ch},()=>{
                    console.log(this.state)
                });
            })
            .catch(err=>{
                console.log(err);
            })
    }
    extractRooms(){
        fetch('http://127.0.0.1:5000/students/getrooms')
            .then(res=>res.json())
            .then(result=>{
                console.log(result.response);
                let ch = result.response;
                this.setState({cgpi:ch},()=>{
                    console.log(this.state)
                });
            })
            .catch(err=>{
                console.log(err);
            })
    }
    extractApplictins(){
        fetch('http://127.0.0.1:5000/students/roomApplication')
            .then(res=>res.json())
            .then(result=>{
                console.log(result.response);
                let ch = result.response;
                this.setState({cgpi:ch},()=>{
                    console.log(this.state)
                });
            })
            .catch(err=>{
                console.log(err);
            })
    }
    componentDidMount(){
        this.extractCGPI();
        this.extractRooms();
        this.extractApplictins();
    }
    render(){
        return(
            <div className="allocatedList-body">
                <div className="allocatedbody-content">
                    <PageTitle text ="Allocated Rooms"/>
                    <div className="roomsList">
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default RoomsAllocated;