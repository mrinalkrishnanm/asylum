"use strict";

import React from 'react';
import Router, { RouteHandler } from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class CompanyInternshipContainer extends React.Component{

  constructor () {
    super()
  }


  render () {
    return (
      <div>
        <h1 className="title-text"> Internships </h1>
        <RouteHandler internships={this.props.internships}/>
      </div>
    );
  }
}

module.exports = CompanyInternshipContainer;
