"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class AnswerList extends React.Component{

  constructor () {
    super()
  }

  render () {
    console.log(this.props.answers)
    var answers = this.props.answers
    var display = answers.map((a) => {
      return (
        <div className="answer-box">
          <h2>Q: {a.question} </h2>
          <p>A: {a.content} </p>
        </div>
      )
    })
    if(_.isEmpty(answers))
      display = (<h2 style={{textAlign: "center"}}> No answers are available </h2>)
    return (
      <div className="answer-list">
        {display}
      </div>
    );
  }
}

module.exports = AnswerList;
