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
    this.state = userStore.getState(); 
  }

	componentWillMount() {
    var _this = this
    userAction.loadCurrent();
    this.onChange = this.onChange.bind(this)
    userStore.listen(this.onChange)
  }

  componentWillUnmount() {
    userStore.unlisten(this.onChange)
  }
  
  onChange (state) {
    this.setState(state)
  }
  render() {
    console.log(this.state)
 		if(!_.isEmpty(this.state.currentUser)) {
 			var currentUser = this.state.currentUser
 			var display=(<Sidebar user={currentUser} />)
 		}
		return(
			<div className='dashboard'>
         		{display} 
        	</div>
			)
 	}
};

Dashboard.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports=Dashboard;
