"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import companyAction from '../actions/companyAction.js'

class CompanyInternshipTable extends React.Component{

  constructor () {
    super()
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
        var applicants = internship.users
        if(!_.isEmpty(applicants))
          var display = applicants.map((u)=>{
            return (
                <tr>
                  <td> u.first_name + " " + u.last_name </td>
                  <td> <button className="orange-btn"> View </button> </td>
                </tr>
            )
          })
        else
          var display = <p style={{textAlign: 'center'}}> There are no applicants yet </p>

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
                  <th> Name </th>
                  <th> Phone Number </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {display}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}

module.exports = CompanyInternshipTable;
