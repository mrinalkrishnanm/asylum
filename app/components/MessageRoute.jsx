"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import { RouteHandler } from 'react-router'

class MessageRoute extends React.Component{

  constructor () {
    super()
  }

  render () {
    return (
        <RouteHandler />
    );
  }
}

module.exports = MessageRoute;
