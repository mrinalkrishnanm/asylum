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
    var conversation = this.props.conversation
    var company = conversation.company.name
    var messages = conversation.messages
    var msgCount = messages.length
    var lastMsg = _.last(messages)
    return (
      <div key={conversation.id} className="message-box">
        <p> Me & {company} </p>
        <h2> {conversation.subject} </h2>
        <small> {lastMsg.content} </small>
        <h4> {msgCount} </h4>
      </div>
    );
  }
}

module.exports = MessageBox;
