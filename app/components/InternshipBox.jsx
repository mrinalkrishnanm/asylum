"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import { Link } from 'react-router';

class InternshipBox extends React.Component{

  constructor () {
    super()
  }

  render () {
    var internship = this.props.internship
    return (
      <div className="internship-box">
        <div className="internship-box-header">
          <h2> {internship.position} </h2>
          <h2 className="internship-title"> Spaceback</h2>
          <Link to="apply-intern" params={{id: internship.id}}>
            <button> Apply </button>
          </Link>
        </div>
        <div className="internship-box-body">
          <p>Duration: {internship.duration}</p>
          <p>Stipend: {internship.stipend} </p>
          <p>Location: {internship.location} </p>
        </div>
      </div>
    );
  }
}

module.exports = InternshipBox;
