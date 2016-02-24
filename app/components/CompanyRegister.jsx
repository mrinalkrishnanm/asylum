import React from 'react';
import Router from 'react-router';  
import Request from 'superagent';
import API from './API.js';


class CompanyRegister extends React.Component {
  constructor() {
    super() //super invokes constructor of the parent class
  }

  registerUser(e){
    
    e.preventDefault();
    var name  = this.refs.name.value
    var c_url = this.refs.url.value
    var email = this.refs.email.value
    var username = this.refs.username.value
    var password = this.refs.password.value

    var company = {
      company : {
        name: name,
        company_url: c_url,
        username: username,
        email: email,
        password: password
      }
    }

    var url = API.url('companies')

    var _this = this
    var success = (res) => {
      console.log("Registered Company")
      _this.context.router.transitionTo('company-login')
    }

    var failure = (res) => {
      console.log(res)
    }

    API.post(url,company,success,failure)

  }

  render() {
    //not getting value from ref
    return (
      <div className="register">
        <h2> Company Registration </h2>

        <input ref="name" type="text" placeholder="Company Name" name="company name" />
        <input ref="url" type="text" placeholder="Company URL" name="company url" />
        <input ref="email" type="text" placeholder="Email" name="email" /> 
        <input ref="username" type="text" placeholder="Username" name="username" />
        <input ref="password" type="password" placeholder="Password" name="password" />
        <input type="submit" value="Register" className="submit-long" onClick={this.registerUser.bind(this)}/>
        
      </div>
    )
  }
}

CompanyRegister.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = CompanyRegister;

