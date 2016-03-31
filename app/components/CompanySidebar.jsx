import React from 'react';
import Router from 'react-router';
import Gravatar from './Gravatar.jsx';
import Request from 'superagent';
import _ from 'lodash';
import {Link} from 'react-router';
import userStore from '../stores/userStore.js';
import userAction from '../actions/userAction.js';


class CompanySidebar extends React.Component{
  constructor(){
    super()
  }

  render(){
    //console.log(this.state.currentUser)
    return(
      <div className='sidebar'>
        <h1 className="interno-logo"> Interno </h1>
        <ul className='sidebar-contents'>
          <Gravatar email={this.props.user.email} size="80" />
          <p className="gravatar-title">Welcome {this.props.user.name} </p>
          <button> ADD INTERNSHIP </button>
          <Link to="company-dashboard"> <li>Dashboard</li> </Link>
          <Link to="company-internships"> <li>Internships</li> </Link>
          <li>Notifications</li>
          <Link to="company-messages"> <li>Inbox</li> </Link>
          <li>Settings</li>
        </ul>
      </div>
    )
  }

}

module.exports=CompanySidebar;

