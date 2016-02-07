import React from 'react';
import Router from 'react-router';
import Gravatar from './Gravatar.jsx';
import Request from 'superagent';
import _ from 'lodash';

import userStore from '../stores/userStore.js';
import userAction from '../actions/userAction.js';


class Sidebar extends React.Component{
	constructor(){
    super()
  }

  render(){
    //console.log(this.state.currentUser)
        return(
    		<div className='sidebar'>
        		<ul className='sidebar-contents'>
                    <Gravatar email={this.props.user.email} size="80" />
                    <p className="gravatar-title">Welcome {this.props.user.first_name} </p>
        			<li>Dashboard</li>
        			<li>Internships</li>
        			<li>Notifications</li>
              <li>Inbox</li>
        			<li>Settings</li>
        		</ul>
    		</div>
    		)
  	}
 
}

module.exports=Sidebar;
