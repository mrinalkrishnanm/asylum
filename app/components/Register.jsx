import React from 'react';
import Router from 'react-router';  

class Register extends React.Component {
	constructor() {
		super() //super invokes constructor of the parent class
	}

	render() {
		return (
			<div className="register">
			<h2> Registration </h2>
			<form>
			<input type="text" placeholder="First Name" name="first name" />
			<input type="text" placeholder="Last Name" name="last name" />
			<input type="text" placeholder="Email" name="email" /> 
			<input type="text" placeholder="Username" name="username" />
			<input type="password" placeholder="Password" name="password" />
            <input type="submit" value="Register" className="submit-long"/>
			</form>
			</div>
			)
	}
}

module.exports = Register;