"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import companyStore from '../stores/companyStore.js';
import companyAction from '../actions/companyAction.js';
import Select from 'react-select';
import AnswerList from './AnswerList.jsx';

class ApplicationContainer extends React.Component{

  constructor () {
    super()
    this.state = companyStore.getState()
  }


  componentWillMount() {
    companyAction.fetchApplication(this.props.params.id)    
    this.onChange = this.onChange.bind(this)
    companyStore.listen(this.onChange)
  }

  componentWillUnmount() {
    companyStore.unlisten(this.onChange)
  }

  onChange(state) {
    console.log("State change")
    this.setState(state, this.afterUserLoad.bind(this))
  }


  afterUserLoad() {
    var avatar = document.getElementsByClassName('user-avatar')[0]
    if(avatar != undefined)
      avatar.style.clientHeight = avatar.style.clientWidth
    console.log("executed")
    if(!_.isEmpty(this.state.application)) {
      var status = _.capitalize(this.state.application.condition)
      this.setState({value: status}, this.changeButton.bind(this))
    }
  }

  logChange(value) {
    console.log(value)
    this.setState({ value: value.label }, this.changeButton.bind(this))

  }

  changeButton(){
    var select = document.getElementsByClassName('Select-control')[0]
    console.log(select)
    select.style.border = "none"
    document.getElementsByClassName('Select-placeholder')[0].style.color = "white"
    document.getElementsByClassName('Select-clear-zone')[0].style.color = "white"
    document.getElementsByClassName('Select-arrow')[0].style.borderColor = "white transparent transparent"
    if(this.state.value == "Hired") 
      select.style.backgroundColor = "#78c44b"
    else if(this.state.value == "Reviewed")
      select.style.backgroundColor = "#ff9e21"
    else
      select.style.backgroundColor = "#f74656"
  }


  render () {
    
    var application = this.state.application
    var internships = this.props.internships

    console.log(this.state.application)

    
    var options = [
      { value: 'one', label: 'Reviewed' },
      { value: 'two', label: 'Hired' },
      { value: 'three', label: 'Rejected' }
    ]
    
    if(!_.isEmpty(application)) {
      var internship = _.filter(internships,function(item) {
        return item.id == application.internship_id
      })[0] // GET APPLIED INTERNSHIP

      var user = _.filter(internship.users,function(item) {
        return item.id == application.user_id
      })[0] // GET APPLICANT
    }

    if(!_.isEmpty(user))
      var avatarName = user.first_name.charAt(0) + user.last_name.charAt(0)


    console.log(this.state.value)
  
    if(!_.isEmpty(application)) {

      var display = (
        <div className="application-info">
          <div className="user-info-container">
            <div className="user-avatar">
              <span>{avatarName}</span>
            </div>
            <div className="application-title">
              <h2>{user.first_name} {user.last_name}</h2>
              <small style={{marginTop: "1.9em"}}>@{user.username}</small>
              <small>{user.email}</small>
              <button> Send Message </button>
            </div>
          </div>

            <div className="application-body">
              <Select
                name="form-field-name"
                className="dropdown"
                options={options}
                searchable={false}
                onChange={this.logChange.bind(this)}
                value={this.state.value}
                placeholder={this.state.value}
              />
              <a href="#" className="view-resume">View Resume</a>
              <AnswerList answers={application.answers}/>
            </div>
        </div>
      )
    }
    else
      display = "Loading"

    return (
      <div>
        {display}
      </div>
    );
  }
}

ApplicationContainer.contextTypes = {
  router: React.PropTypes.func.isRequired
}
module.exports = ApplicationContainer;
