import React from 'react';
import './StudentProfile.css';
import pp from '../../static/images/PP.png';


import PageTitle from '../PageTitle/Pagetitle';

class StudentProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cgpi:0
        }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:5000/students/getcgpi')
            .then(res=>res.json())
            .then(result=>{
                let ch = result.response
                ch= ch.map(val=>{
                    return JSON.parse(val);
                })
                let f = ch.find(elem => elem.rollno == this.props.rollno)
                console.log(f)
                this.setState({cgpi:f.cgpa},()=>{
                    console.log(this.state)
                });
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        // let studentData=localStorage.getItem("student_token").identity;
        // console.log(studentData);
        
    return(
        <div className="StudentProfile-Container">
            <div className="StudentProfile-Content">
                <PageTitle text="Student Profile"/>
                <div className="profilePicture">
                    <img src={pp}/>
                </div>
                <div>
                    <div className="student-header">
                        <div className="studentName">
                            {this.props.name}
                        </div>
                        <div className="studentDesig">
                            Student
                        </div>
                    </div>
                    <div className="student-info">
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Roll No: 
                            </span>
                            <span className="infoValue">
                                {this.props.rollno}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                CGPA: 
                            </span>
                            <span className="infoValue">
                                {this.state.cgpi}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Phone Number: 
                            </span>
                            <span className="infoValue">
                                {this.props.phonenumber}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Email: 
                            </span>
                            <span className="infoValue">
                                {this.props.email}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Department: 
                            </span>
                            <span className="infoValue">
                                {this.props.dept}
                            </span>
                        </div>
                        <div className="infoGroup">
                            <span className="infoTitle">
                                Year: 
                            </span>
                            <span className="infoValue">
                                {this.props.yearofstudy}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}


export default StudentProfile;