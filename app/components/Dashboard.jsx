import React from 'react';
import Router from 'react-router';
import Sidebar from './Sidebar.jsx';
import Request from 'superagent';
import _ from 'lodash';
class Dashboard extends React.Component{
	constructor() {
		super()
		this.state = {
			current_user: undefined
		}
	}

	componentWillMount() {
		var _this = this
		Request.post("http://localhost:3000/tokens/verify_token")
		.send({token:localStorage.interno_token})
		.end(function(err,res){
			console.log(res)
			var user = JSON.parse(res.text).user
			_this.setState({current_user:user})
		})
	}
 	render() {
 		if(!_.isEmpty(this.state.current_user)) {
 			var currentUser = this.state.current_user
 		
 			var display=(<Sidebar user={currentUser} />)
 		}
		return(
			<div className='dashboard'>
         		{display} 
        	</div>
			)
 	}
};
module.exports=Dashboard;