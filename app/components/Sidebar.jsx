import React from 'react';
import Router from 'react-router';
import Gravatar from './Gravatar.jsx';

class Sidebar extends React.Component{
	constructor(){
		super()
	}

	render(){
        console.log(this.props.user)
  		return(
    		<div className='sidebar'>
        		<ul className='sidebar-contents'>
                    <Gravatar email={this.props.user.email} size="80" />
                    <p className="gravatar-title">Welcome {this.props.user.first_name} </p>
        			<li>Home</li>
        			<li>Projects</li>
        			<li>Notification</li>
                    <li>Inbox</li>
        			<li>Team</li>
        			<li>Calendar</li>
        			<li>Settings</li>
        		</ul>
    		</div>
    		)
  	}
 
}

module.exports=Sidebar;
