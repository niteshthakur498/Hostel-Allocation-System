import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import './RoomsAllocated.css'

import PageTitle from '../PageTitle/Pagetitle';

class RoomsAllocated extends React.Component{
    constructor(){
        super();
        this.state={
            cgpi:[],
            rooms:[],
            applictions:[],
            completed: false
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
                this.setState({rooms:ch},()=>{
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
                this.setState({applictions:ch},()=>{
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
        console.log(this.state)
    }
    handleAllocate(){
        console.log("Start")
        let cgpiList = this.state.cgpi.sort((a, b)=>{
            a=JSON.parse(a);
            b=JSON.parse(b);
            return b.cgpa-a.cgpa; 
        });
        cgpiList= cgpiList.map(val=>{
            return JSON.parse(val);
        })
        let roomsList = this.state.rooms.map(val=>{
            return JSON.parse(val);
        })
        let applicationList = this.state.applictions.map(val=>{
            return JSON.parse(val);
        })
        for(let i=0;i<cgpiList.length;i++){
            let st = cgpiList[i];
            const applicationFound = applicationList.find(element => parseInt(element.rollNo) === st.rollno);
            const already = roomsList.find(elem=>{
                return elem.allocatedRollno === (st.rollno)
            })
            console.log(typeof st.rollno )
            console.log("hiii",already)
            if(!already && applicationFound){
                let options= applicationFound.roomOptions;
                for(let j=0;j<options.length;j++){
                    let opt = options[j];
                    console.log(options)
                    const roomFound = roomsList.find(element => element.roomno == opt);
                    console.log(typeof opt)
                    if(roomFound && !roomFound.allocated){
                        console.log(opt);
                        // roomFound.allocated=true;
                        let room = {
                            roomno: parseInt(opt),
                            allocatedRollno: st.rollno
                        }
                        fetch('http://127.0.0.1:5000/students/updateroom',
                        {
                            method: 'PATCH',  
                            body :JSON.stringify(room),
                            headers:{
                                'Content-Type': 'application/json;charset=UTF-8'
                              }
                        })
                        .then(res=>res.json())
                        .then(result=>{
                            console.log(result);
                        })
                        roomFound.allocated = true
                        break;
                    }
                }
            }
        }
        console.log("End");
        alert("Rooms Allocated")
        this.setState({completed:true})
    }
    render(){
        if(this.state.completed){
            return(
                <Redirect to='/admin/profile'/>
            )
        }
        const rooms = this.state.rooms.map((room,index)=>{
            room = JSON.parse(room);
            let all='';
            if(!room.allocated){
                all = 'No';
            }
            else{
                all="Yes"
            }
            let allR='';
            if(room.allocatedRollno===0){
                allR = '----';
            }
            else{
                allR=room.allocatedRollno
            }
            return(
                <div className="roomList-item" key={index}>
                    {/* <div className="item-column-no">{index+1}.</div> */}
                    <div className="item-column-roomNo">{room.roomno}</div>
                    <div className="item-column-hostelName">{room.hostelName}</div>
                    <div className="item-column-allocated">
                        {all}
                    </div>
                    <div className="item-column-allocatedRoom">
                        {allR}
                    </div>
                </div>
            );
        })
        return(
            <div className="allocatedList-body">
                <div className="allocatedbody-content">
                    <PageTitle text ="Allocated Rooms"/>
                    <div onClick={this.handleAllocate.bind(this)} className="button-Allocate">Allocate</div>
                    <div className="roomsList">
                        <div className="roomList-item roomList-header">
                            <div className="item-column-roomNo">Room No</div>
                            <div className="item-column-hostelName">Hostel Name</div>
                            <div className="item-column-allocated">
                                Allocated
                            </div>
                            <div className="item-column-allocatedRoom">
                                Allocated RollNo
                            </div>
                        </div>
                        {
                            rooms
                        }
                    </div>
                </div>
            </div>
        );
    }
}


export default RoomsAllocated;