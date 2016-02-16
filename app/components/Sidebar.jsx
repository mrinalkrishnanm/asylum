import React from 'react';
import Router from 'react-router';
import Gravatar from './Gravatar.jsx';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router';
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
              <Link to="dashboard"> <li>Dashboard</li> </Link>
              <Link to="internships"> <li>Internships</li> </Link>
        			<li>Notifications</li>
              <Link to="messages"> <li>Inbox</li> </Link>
        			<li>Settings</li>
        		</ul>
    		</div>
    		)
  	}
 
}

module.exports=Sidebar;
