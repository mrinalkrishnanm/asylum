import React from 'react';
import Router from 'react-router';
import Sidebar from './Sidebar.jsx';
import Request from 'superagent';
import _ from 'lodash';
import userAction from '../actions/userAction.js';
import userStore from '../stores/userStore.js';
import { RouteHandler } from 'react-router';
import internshipStore from '../stores/internshipStore.js';
import internshipAction from '../actions/internshipAction.js';
import conversationStore from '../stores/conversationStore.js';
import conversationAction from '../actions/conversationAction.js';

class DashboardContainer extends React.Component{
  constructor() {
    super()
    this.state = userStore.getState();
  }

  componentWillMount() {
    var _this = this
    userAction.loadCurrent();
    this.onChange = this.onChange.bind(this)
    userStore.listen(this.onChange)
    conversationAction.fetchAll();
    internshipAction.fetchInternship();
    internshipAction.fetchApplied();
    internshipStore.listen(this.onChange)
    conversationStore.listen(this.onChange)
  }

  componentWillUnmount() {
    userStore.unlisten(this.onChange)
    internshipStore.unlisten(this.onChange)
    conversationStore.unlisten(this.onChange)

  }

  onChange(state) {
    this.setState(state)
  }

  render() {

    if(!_.isEmpty(this.state.currentUser)) {
      var currentUser = this.state.currentUser
      var display=(<Sidebar user={currentUser} />)
    }

    return(
      <div className='dashboard-wrapper'>
        {display}
        <div className='dashboard-container'>
          <RouteHandler internships={this.state.internships} currentUser={this.state.currentUser} 
          conversations={this.state.conversations}/>
        </div>
      </div>
    )
  }
}
module.exports = DashboardContainer;
