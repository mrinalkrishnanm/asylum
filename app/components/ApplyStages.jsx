"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import internshipStore from '../stores/internshipStore.js'

class ApplyStages extends React.Component{

  constructor () {
    super()
    this.state = internshipStore.getState();
  }

  componentWillMount() {
    this.onChange = this.onChange.bind(this)
    internshipStore.listen(this.onChange)
  }

  componentWillUnmount() {
    internshipStore.unlisten(this.onChange)
  }

  onChange(state) {
    this.setState(state)
  }
  
  changeOne(e){
    e.preventDefault();
    if(this.state.unlockOne)
      this.props.change(1)
  }

  changeTwo(e){
    e.preventDefault();
    if(this.state.unlockTwo)
      this.props.change(2)
  }

  changeThree(e){
    e.preventDefault();
    if(this.state.unlockThree)
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
