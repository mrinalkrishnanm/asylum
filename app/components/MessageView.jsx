"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import API from './API.js'
import userStore from '../stores/userStore.js'
import Message from './Message.jsx';


class MessageView extends React.Component{

  constructor () {
    super()
    this.state = userStore.getState()
  }

  componentDidMount() {
    this.setState({messages: this.props.conversation.messages})
  }

  componentWillMount() {
    this.onChange = this.onChange.bind(this)
    userStore.listen(this.onChange)
  }

  componentWillUnmount() {
    userStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }
  
  sendReply() {
    var messages = this.state.messages
    var reply = this.refs.reply.value
    
    var data = {
      sender_type: "User",
      sender_id: this.state.currentUser.id,
      conversation_id: this.props.conversation.id,
      content: reply
    }

    var url = API.url('messages')
    var _this = this
    var success = (res) => {
      console.log(res)
      messages.push(res.message)
      _this.setState({messages:messages})
      _this.refs.reply.value = ""
    }

    //counter not incrementing, so actions up will be better.

    var failure = (res) => {
      console.log(res)
      console.log("SUCH A FAIL")
    }

    API.post(url,data,success,failure)
  }
  render () {
    var conversation = this.props.conversation
    var company = conversation.company
    var messages = conversation.messages

    var allMessages = messages.map((msg) => {
      return <Message message={msg} />
    })
    return (
      <div className="message-view">
        <h2> {conversation.subject} </h2>
        <p> Me & {company.name} </p>
        <div className="message-container-list">
          {allMessages}
        </div>
        <div className="message-reply">
          <textarea ref="reply" />
          <button onClick={this.sendReply.bind(this)}> Reply </button>
        </div>
      </div>
    );
  }
}

module.exports = MessageView;
