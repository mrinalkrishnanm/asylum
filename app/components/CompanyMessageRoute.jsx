"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import { RouteHandler } from 'react-router'

class CompanyMessageRoute extends React.Component{

  constructor () {
    super()
  }

  render () {
    console.log()
    return (
        <RouteHandler currentCompany={this.props.currentCompany} conversations={this.props.conversations} />
    );
  }
}

module.exports = CompanyMessageRoute;
