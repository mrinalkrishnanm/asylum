"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class Message extends React.Component{

  constructor () {
    super()
  }

  render () {
    var message = this.props.message
    return (
      <div className="message-container">
      <h2> Me </h2>
      <p> {message.content} </p>
      </div>
    );
  }
}

module.exports = Message;
