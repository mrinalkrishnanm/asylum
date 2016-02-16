"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import MessageBox from './MessageBox.jsx'
import conversationStore from '../stores/conversationStore.js'
import conversationAction from '../actions/conversationAction.js';

class MessageList extends React.Component{

  constructor () {
    super()
    this.state = conversationStore.getState();
  }

  componentWillMount() {
    this.onChange = this.onChange.bind(this)
    conversationStore.listen(this.onChange)
  }

  componentWillUnmount() {
    conversationStore.unlisten(this.onChange)
  }
  
  onChange(state) {
    this.setState(state)
  }
  render () {
    var conversations = this.state.conversations  
    var display = conversations.map((item) => {
      return <MessageBox key={item.id} conversation={item}/>
    })
    return (
      <div className="message-list">
        <h2> Message List </h2>
        {display}
      </div>
    );
  }
}

module.exports = MessageList;
