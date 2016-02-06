"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class InternshipBox extends React.Component{

  constructor () {
    super()
  }

  render () {
    var internship = this.props.internship
    return (
      <div className="internship-box">
       <h2> {internship.position} </h2>
      </div>
    );
  }
}

module.exports = InternshipBox;
