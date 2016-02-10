"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class ApplyStages extends React.Component{

  constructor () {
    super()
  }
  
  changeOne(e){
    e.preventDefault();
    this.props.change(1)
  }

  changeTwo(e){
    e.preventDefault();
    this.props.change(2)
  }

  changeThree(e){
    e.preventDefault();
    this.props.change(3)
  }

  render () {
    var stageStyle = {
      borderTop: '2px solid #6dd42f'
    }
    
    if(this.props.currentStage == 1)
      var styleOne = stageStyle
    else if(this.props.currentStage == 2)
      var styleTwo = stageStyle
    else
      var styleThree = stageStyle

    return (
      <div className="apply-stages">
        <li onClick={this.changeOne.bind(this)} style={styleOne} className="stage-block"> 
          <h2> Upload Resume </h2> 
          <p> ...subtext </p>
        </li>
        <li onClick={this.changeTwo.bind(this)} style={styleTwo} className="stage-block"> 
          <h2> Fill Details </h2>
          <p> ...subtext </p>
        </li>
        <li onClick={this.changeThree.bind(this)} style={styleThree} className="stage-block"> 
          <h2> Applied Successfully! </h2>
          <p> ...subtext </p>
        </li>
      </div>
    );
  }
}

module.exports = ApplyStages;
