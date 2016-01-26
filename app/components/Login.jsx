import React from 'react';
import Router from 'react-router';  

class Login extends React.Component {
	constructor() {
		super() 
	}

	render() {
		return (			
			<div className="login">
			<h2> Login </h2>
			<form>
			<input type="text" placeholder="Username" name="username" />
			<input type="password" placeholder="Password" name="password" />
            <input type="submit" value="Login" className="submit-long"/>
			</form>
			</div>
			)
	}
}

module.exports = Login;