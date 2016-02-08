  import React from 'react';
  import Router from 'react-router'
  import internshipAction from '../actions/internshipAction.js';
  import internshipStore from '../stores/internshipStore.js';
  import InternshipBox from './InternshipBox.jsx';
  
  class InternshipList extends React.Component{
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

      var internships = this.state.internships
      console.log(internships)
      if(!_.isEmpty(internships)) {
        var display = internships.map((internship) => {
          return <InternshipBox key={internship.id} internship={internship} />
        })
      }
      return(
        <div className="internship-list">
          {display}
        </div>

        )
    }
  }
  module.exports = InternshipList;
