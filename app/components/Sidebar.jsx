import React from 'react';
import Router from 'react-router';
import Gravatar from './Gravatar.jsx';

class Sidebar extends React.Component{
	constructor(){
		super()
	}

	render(){
  		return(
    		<div className='sidebar'>
        		<ul className='sidebar-contents'>
                    <Gravatar email="akhilr94@gmail.com" size="80" />
                    <p className="gravatar-title">Welcome Akhil </p>
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
