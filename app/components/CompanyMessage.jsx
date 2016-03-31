"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class CompanyMessage extends React.Component{

  constructor () {
    super()
  }

  render () {
    var message = this.props.message
    console.log(message)
    if(_.has(message, 'sender.name'))
      var sender = message.sender.name
    else
      var sender = message.sender.first_name
    return (
      <div className="message-container">
      <h2> {sender} </h2>
      <p> {message.content} </p>
      </div>
    );
  }
}

module.exports = CompanyMessage;
