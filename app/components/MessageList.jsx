"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import MessageBox from './MessageBox.jsx'
import conversationStore from '../stores/conversationStore.js'
import conversationAction from '../actions/conversationAction.js';
import MessageView from './MessageView.jsx'
class MessageList extends React.Component{

  constructor () {
    super()
  }


  showMessage(conversation){
    this.setState({
      isMessageShown: true,
      conversation: conversation
    })
  }
  render () {
    var conversations = this.state.conversations  
    var display = conversations.map((item) => {
      return <MessageBox showMessage={this.showMessage.bind(this)} key={item.id} conversation={item}/>
    })

    if(this.state.isMessageShown)
      var msgShow = <MessageView conversation={this.state.conversation} />
    return (
      <div className="message-wrapper">
        <div className="message-list">
          {display}
        </div>
        {msgShow}
      </div>
    );
  }
}

module.exports = MessageList;
