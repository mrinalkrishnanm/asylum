"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import internshipAction from '../actions/internshipAction.js'
import internshipStore from '../stores/internshipStore.js'


class AppliedInternshipList extends React.Component{

  constructor () {
    super()
    this.state = internshipStore.getState()
  }


  render () {
    var applied = this.props.applied
    var _this = this

    var display = applied.map((item) => {
      var successMsg = "You have been offered the position of " + item.position
      var msg = item.internizes[0].status == "reviewed" ? "Your application is being reviewed" : successMsg
      return(
        <div key={item.id} className="internship-box">
          <div className="internship-box-header">
            <h2> {item.position} </h2>
            <h2 className="internship-title"> {item.created_by.name} </h2>
          </div>
          <div className="applied-internship-status">
            <p>{msg}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="applied-internship-wrapper">
        <h2> Applied Internships </h2>
        {display}
      </div>
    );
  }
}

module.exports = AppliedInternshipList;
