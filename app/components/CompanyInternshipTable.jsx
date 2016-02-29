"use strict";

import React from 'react';
import Router, { Link } from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import companyAction from '../actions/companyAction.js'
import companyStore from '../stores/companyStore.js';

class CompanyInternshipTable extends React.Component{

  constructor () {
    super()
  }
  
  componentWillMount() {
    companyAction.fetchApplications(this.props.params.id)
    this.onChange = this.onChange.bind(this)
    companyStore.listen(this.onChange)
  }

  componentWillUnmount() {
    companyStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }

  render () {

    console.log(this.props.internships)
    var id = this.props.params.id
    var internships = this.props.internships

    if(!_.isEmpty(internships))
      {
        var internship = _.filter(internships, function(i) {
          return i.id == id
        })[0]

        var created_by = internship.created_by.name

        var { position, description, duration, stipend, location } = internship
        console.log(internship)

        var applicants = internship.users /*APPLICANTS */
        var applications = internship.internizes /* APPLICATIONS */

        var counter = 0;
        var app_id = 0;
        if(!_.isEmpty(applicants))
          var display = applicants.map((u) => {
            ++counter;
            var application = _.filter(applications, (a) => {
              app_id = a.id              
              return a.user_id = u.id
            })[0];


            var status = _.capitalize(application.condition)
            if (status == "Reviewed")
              var infoStyle = "status-msg orange"
            else if (status == "Hired")
              var infoStyle = "status-msg green"
            else if (status == "Rejected")
              var infoStyle = "status-msg red"
            else
              var infoStyle = "status-msg"
      
            return (
              <tr>
                  <td>{counter} </td>
                  <td> {u.first_name} {u.last_name} </td>
                  <td><span className={infoStyle}>{status}</span></td>
                  <td><Link to="application" params={{id:app_id}}> <button> View </button> </Link></td>
                </tr>
            )
          })
        else
          var _display = <p className="info-msg">There are no applicants yet</p>

      }
      return (
        <div className="internship-table">
          <div className="grey-box">
            <h2> {position} </h2>
            <button> Add Questions </button>
            <p> {description} </p>
            <small>{duration} months</small>
            <small>₹{stipend} </small>
            <small>{location} </small>

          </div>
          <div className="applicant-list">
            <table>
              <thead>
                <tr>
                  <th> # </th>
                  <th> Name </th>
                  <th> Status </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {display}
              </tbody>
            </table>
            {_display}            
          </div>
        </div>
      );
  }
}

module.exports = CompanyInternshipTable;