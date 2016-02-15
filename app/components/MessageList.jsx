"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import MessageBox from './MessageBox.jsx'
class MessageList extends React.Component{

  constructor () {
    super()
  }

  render () {
    return (
      <div className="message-list">
        <h2> Message List </h2>
        <MessageBox/>
      </div>
    );
  }
}

module.exports = MessageList;
