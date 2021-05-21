import React, { Component } from 'react';
import ProjectLists from '../projects/ProjectLists';
import Notification from './Notification';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists/>
                    </div>
                    <div className="s12 m5 offset-m1">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;