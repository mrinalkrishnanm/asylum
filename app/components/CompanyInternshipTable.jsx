"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class CompanyInternshipTable extends React.Component{

  constructor () {
    super()
  }

  componentDidMount() {
    var id = this.props.params.id
    var internship = _.filter(internships, function(i) {
      return i.id == id
    })
    this.setState({internship})
  }
  render () {
    console.log(this.props.internships)
    var {internship} = this.state
    var users = internship.users
    return (
      <div className="internship-table">
        <h2> Hello </h2>
      </div>
    );
  }
}

module.exports = CompanyInternshipTable;
