"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import Message from './Message.jsx';


class MessageView extends React.Component{

  constructor () {
    super()
  }

  render () {
    var conversation = this.props.conversation
    var company = conversation.company
    var messages = conversation.messages

    var message = messages.map((msg) => {
      return <Message message={msg} />
    })
    return (
      <div className="message-view">
        <h2> {conversation.subject} </h2>
        <p> Me & {company.name} </p>
        <div className="message-container-list">
          {message}
        </div>
      </div>
    );
  }
}

module.exports = MessageView;
