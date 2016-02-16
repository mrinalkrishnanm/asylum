"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class MessageBox extends React.Component{

  constructor () {
    super()
  }

  handleClick(e) {
    e.preventDefault();
    this.props.showMessage(this.props.conversation)
  }
  render () {
    var conversation = this.props.conversation
    var company = conversation.company
    var messages = conversation.messages
    var msgCount = messages.length
    var lastMsg = _.last(messages)
    return (
      <div key={conversation.id} onClick={this.handleClick.bind(this)} className="message-box">
        <p> Me & {company.name} </p>
        <h4> {msgCount} </h4>        
        <h2> {conversation.subject} </h2>
        <small> {lastMsg.content} </small>
      </div>
    );
  }
}

module.exports = MessageBox;
