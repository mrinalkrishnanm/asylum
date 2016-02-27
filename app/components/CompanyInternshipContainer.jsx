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
      <RouteHandler internships={this.props.created}/>
    );
  }
}

module.exports = CompanyInternshipContainer;
