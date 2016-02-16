"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import internshipAction from '../actions/internshipAction.js'
import internshipStore from '../stores/internshipStore.js'
import userStore from '../stores/userStore.js'
import API from './API.js'


class ResumeDetails extends React.Component{

  constructor () {
    super()
    this.state = userStore.getState()
  }

  updateAnswer(internize_id) {

    var inputs = document.getElementsByTagName('textarea')

    var data = {
      answers: []
    }


    for(var i=0;i < inputs.length;i++){
      var answer = {}
      answer.question_id = inputs[i].dataset.id
      answer.content = inputs[i].value
      answer.internize_id = internize_id
      data.answers.push(answer)
    }

    var success = (res) => {
      console.log(res)
      internshipAction.unlockStage(3)
    }

    var failure = (res) => {
      console.log(res)
    }

    var url = API.url('answers')

    API.post(url,data,success,failure)

  }
  
  submitApplication(e) {
    e.preventDefault();
    console.log("SUBMITTING")
    
    var url = API.url("internizes")
    var _this = this

    var success = (res) => {
      console.log("Application Submitted")
      console.log(res)
      _this.updateAnswer(res.internize.id);
    }
    var failure = (res) => {
      console.log("FAILURE")
    }
    var data = {
      internship_id: this.props.internship.id,
      user_id: this.state.currentUser.id
    }
    API.post(url,data,success,failure)
  }

  
  render () {
    var internship = this.props.internship
    var questions = internship.questions

    var displayQn = questions.map((qn) => {
      var question = qn.question
      var qnClass = "qn" + qn.id
      return (<div key={qn.id} className="question-block">
                <h2>Q. {question}</h2>
                <textarea className={qnClass} data-id={qn.id} placeholder="Enter answer"/>
              </div>
             )
    })
    return (<div className="stage-two">
              <h2> Resume Details </h2>

              <div className="question-container">
                {displayQn}
              </div>
              <button onClick={this.submitApplication.bind(this)}> Submit </button>

            </div>
    );
  }
}

module.exports = ResumeDetails;
