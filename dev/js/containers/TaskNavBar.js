import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class TaskNavBar extends Component {


    render() {
        return (
            <div className="task-bar">
              <div className="name">Задачи</div>
              <ul className="list">
                <li className="item -active"><a><span>Elitplan</span><span className="_pull-right">20</span></a>
                  <ul className="sublist">
                    <li className="item -active"><a><span>Новые</span><span className="_pull-right">14</span></a></li>
                    <li className="item"><a><span>Выполненные</span><span className="_pull-right">4</span></a></li>
                    <li className="item"><a><span>На рассмотрении</span><span className="_pull-right">1</span></a></li>
                    <li className="item"><a><span>Отложенные</span><span className="_pull-right">0</span></a></li>
                    <li className="item"><a><span>Удалённые</span><span className="_pull-right">1</span></a></li>
                  </ul>
                </li>
                <li className="item"><a><span>Ruplans</span><span className="_pull-right">20</span></a>
                  <ul className="sublist">
                    <li className="item -active"><a><span>Новые</span><span className="_pull-right">14</span></a></li>
                    <li className="item"><a><span>Выполненные</span><span className="_pull-right">4</span></a></li>
                    <li className="item"><a><span>На рассмотрении</span><span className="_pull-right">1</span></a></li>
                    <li className="item"><a><span>Отложенные</span><span className="_pull-right">0</span></a></li>
                    <li className="item"><a><span>Удалённые</span><span className="_pull-right">1</span></a></li>
                  </ul>
                </li>
              </ul>
            </div>
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


export default connect(null, null)(TaskNavBar);
