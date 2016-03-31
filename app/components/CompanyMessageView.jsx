"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import API from './API.js'
import userStore from '../stores/userStore.js'
import CompanyMessage from './CompanyMessage.jsx';


class CompanyMessageView extends React.Component{

  constructor () {
    super()
  }

  componentDidMount() {
    this.setState({messages: this.props.conversation.messages})
    console.log(this.props.currentCompany)
  }
  
  sendReply() {
    var messages = this.state.messages
    var reply = this.refs.reply.value
  
    var data = {
      sender_type: "Company",
      sender_id: this.props.currentCompany.id,
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
    var user = conversation.user

    var allMessages = messages.map((msg) => {
      return <CompanyMessage message={msg} />
    })
    return (
      <div className="message-view">
        <h2> {conversation.subject} </h2>
        <p> {user.first_name} & {company.name} </p>
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

module.exports = CompanyMessageView;
