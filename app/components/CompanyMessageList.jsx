"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import CompanyMessageBox from './CompanyMessageBox.jsx'
import CompanyMessageView from './CompanyMessageView.jsx'
class CompanyMessageList extends React.Component{

  constructor () {
    super()
    this.state = {
      isMessageShown: false
    }
  }


  showMessage(conversation){
    this.setState({
      isMessageShown: true,
      conversation: conversation
    })
  }
  render () {
    var conversations = this.props.conversations  
    if(!_.isEmpty(conversations))
    var display = conversations.map((item) => {
      return <CompanyMessageBox showMessage={this.showMessage.bind(this)} key={item.id} conversation={item}/>
    })

    if(this.state.isMessageShown)
      var msgShow = <CompanyMessageView currentCompany={this.props.currentCompany} conversation={this.state.conversation} />
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

module.exports = CompanyMessageList;
