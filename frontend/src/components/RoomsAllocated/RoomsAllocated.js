import React from 'react'
import './RoomsAllocated.css'

import PageTitle from '../PageTitle/Pagetitle';

class RoomsAllocated extends React.Component{
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