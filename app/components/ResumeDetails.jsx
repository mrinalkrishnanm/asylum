"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class ResumeDetails extends React.Component{

  constructor () {
    super()
  }

  render () {
    var internship = this.props.internship
    var questions = internship.questions

    var displayQn = questions.map((qn) => {
      var question = qn.question
      var qnClass = "qn" + qn.id
      return (<div key={qn.id} className="question-block">
                <h2>Q. {question}</h2>
                <textarea className={qnClass} placeholder="Enter answer"/>
              </div>
             )
    })
    return (<div className="stage-two">
              <h2> Resume Details </h2>

              <div className="question-container">
                {displayQn}
              </div>
              <button> Submit </button>

            </div>
    );
  }
}

module.exports = ResumeDetails;
