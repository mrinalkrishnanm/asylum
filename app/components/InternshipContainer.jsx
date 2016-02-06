  import React from 'react';
  import Router from 'react-router'
  import internshipAction from '../actions/internshipAction.js';
  import internshipStore from '../stores/internshipStore.js';

  class InternshipContainer extends React.Component{
    constructor(){
      super()
      this.state = internshipStore.getState();
    }
    componentWillMount(){
      internshipAction.fetchInternship();
      this.onChange=this.onChange.bind(this)
      internshipStore.listen(this.onChange)
    }
    componentWillUnmount(){
      internshipStore.unlisten(this.onChange)
    }
    onChange(state){
      this.setState(state)
    }
    render() {
      return(
        <h2>internship container</h2>
        )
    }
  }
  module.exports = InternshipContainer;
