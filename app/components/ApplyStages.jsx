"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class ApplyStages extends React.Component{

  constructor () {
    super()
  }

  applyStyle() {

    var stages = document.getElementsByClassName('stage-block')
    var stageStyle = "2px solid #6dd42f"
    if(this.props.currentStage == 1)
      stages[0].style.borderTop = stageStyle
    else if(this.props.currentStage == 2)
      stages[1].style.borderTop = stageStyle
    else
      stages[2].style.borderTop = stageStyle

  }

  componentDidMount() {
    this.applyStyle();
  }
  render () {
    return (
      <div className="apply-stages">
        <li className="stage-block"> 
          <h2> Upload Resume </h2> 
          <p> ...subtext </p>
        </li>
        <li className="stage-block"> 
          <h2> Fill Details </h2>
          <p> ...subtext </p>
        </li>
        <li className="stage-block"> 
          <h2> Applied Successfully! </h2>
          <p> ...subtext </p>
        </li>
      </div>
    );
  }
}

module.exports = ApplyStages;
