"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import companyStore from '../stores/companyStore.js';
import companyAction from '../actions/companyAction.js';

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
    this.setState(state, this.changeStyle.bind(this))
  }

  changeStyle() {
    var avatar = document.getElementsByClassName('user-avatar')[0]
    if(avatar != undefined)
      avatar.style.clientHeight = avatar.style.clientWidth
    console.log("executed")

  }


  render () {
    var application = this.state.application
    var internships = this.props.internships

    console.log(this.state.application)

    if(!_.isEmpty(application)) {
      var internship = _.filter(internships,function(item) {
        return item.id == application.internship_id
      })[0] // GET APPLIED INTERNSHIP

      var user = _.filter(internship.users,function(item) {
        return item.id == application.user_id
      })[0] // GET APPLICANT
    }

    //console.log(internship)
    //console.log(user)

    if(!_.isEmpty(user)) {
      var avatarName = user.first_name.charAt(0) + user.last_name.charAt(0)
    }
    if(!_.isEmpty(application)) {
      var display = (
        <div className="application-info">
          <div className="user-info-container">
            <div className="user-avatar">
              <span>{avatarName}</span>
            </div>
            <div className="application-title">
              <h2>{user.first_name} {user.last_name}</h2>
              <small style={{marginTop: "1.4em"}}>@{user.username}</small>
              <small>{user.email}</small>
            </div>
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
