"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class MessageBox extends React.Component{

  constructor () {
    super()
  }

  render () {
    return (
      <h3> Message Content </h3>
    );
  }
}

module.exports = MessageBox;
