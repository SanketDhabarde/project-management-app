import React, { Component } from 'react';
import ProjectLists from '../projects/ProjectLists';
import Notification from './Notification';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component{
    render(){
        const { projects } = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectLists projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        // connect to firestore projects collection
        {collection : 'projects'}
    ])
)(Dashboard);