"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import internshipAction from '../actions/internshipAction.js'
import internshipStore from '../stores/internshipStore.js'
class ResumeDetails extends React.Component{

  constructor () {
    super()
  }

  handleSubmit(e) {
    e.preventDefault();
    var inputs = document.getElementsByTagName('textarea')
    var questions = this.props.internship.questions

    for(var i=0;i<questions.length;i++) 
      {
        for(var j=0;j<inputs.length;j++)
          {
            if(inputs[i].dataset.id == questions[i].id)
              {
                questions[i].answer = inputs[i].value;

              }
          }
      }


      console.log(questions)

      var data = {
        questions: questions
      }

     internshipAction.updateQuestions(data)
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
              <button onClick={this.handleSubmit.bind(this)}> Submit </button>

            </div>
    );
  }
}

module.exports = ResumeDetails;
