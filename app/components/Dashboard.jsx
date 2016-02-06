import React from 'react';
import Router from 'react-router';
import Sidebar from './Sidebar.jsx';
import Request from 'superagent';
import _ from 'lodash';
import userAction from '../actions/userAction.js';
import userStore from '../stores/userStore.js';

class Dashboard extends React.Component{
  constructor() {
    super()
  }

   render() {
    console.log(this.state)
    return(
      <div className='--dashboard'>
        <h1> This is my dashboard component </h1>
      </div>
    )
  }
};

Dashboard.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports=Dashboard;
