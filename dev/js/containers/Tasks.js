import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TaskHeader from '../components/TaskHeader';




class Tasks extends Component {

    render() {
        return (
            <section className="tasks-section">
              <TaskHeader />
            </section>
        );
    }

}

/*
function mapStateToProps(state) {
    return {
        users: state
    };
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}
*/


export default connect(null, null)(Tasks);
