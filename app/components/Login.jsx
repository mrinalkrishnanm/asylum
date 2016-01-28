import React from 'react';
import Router from 'react-router';  
import Request from 'superagent';

class Login extends React.Component {
	constructor() {
		super() 
	}

   	handleLogin(e){
   		e.preventDefault();
   		var username=this.refs.username.value;
   		var password=this.refs.password.value;

   	var enter={
   		username:username,
   		password:password
   	}
   	console.log(enter)
   	Request.post("http://localhost:3000/tokens/verify")
   	.send({user:enter})
   	.end(function(err,res){
   		console.log(res)
   	})
      
    }

	render() {
		return (			
			<div className="login">
			<h2> Login </h2>
			<form onSubmit={this.handleLogin.bind(this)}>
			<input ref="username" type="text" placeholder="Username" name="username" />
			<input ref="password" type="password" placeholder="Password" name="password" />
            <input type="submit" value="Login" className="submit-long"/>
			</form>
			</div>
			)
	}
}

module.exports = Login;