import React from 'react';
import Router from 'react-router';  
import Request from 'superagent';

class Register extends React.Component {
	constructor() {
		super() //super invokes constructor of the parent class
	}

	registerUser(e){
		e.preventDefault();
		var firstName = this.refs.firstname.value
        var lastName  = this.refs.lastname.value
        var email = this.refs.email.value
        var username = this.refs.username.value
        var password = this.refs.password.value
		
		var payload = {
				first_name: firstName,
				last_name: lastName,
				username: username,
				email: email,
				password: password
		}
        
        console.log(payload)

		Request.post("http://localhost:3000/users")
		.send({user:payload})
		.end((err,res) => {
			console.log(res)
			if(res.status==200)
				alert("Registered");
		})

	}

	render() {
	//not getting value from ref fuck u
		return (
			<div className="register">
			<h2> Registration </h2>

			<input ref="firstname" type="text" placeholder="First Name" name="first name" />
			<input ref="lastname" type="text" placeholder="Last Name" name="last name" />
			<input ref="email" type="text" placeholder="Email" name="email" /> 
			<input ref="username" type="text" placeholder="Username" name="username" />
			<input ref="password" type="password" placeholder="Password" name="password" />
            <input type="submit" value="Register" className="submit-long" onClick={this.registerUser.bind(this)}/>

			</div>
			)
	}
}

module.exports = Register;