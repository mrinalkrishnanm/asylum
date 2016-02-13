import alt from '../alt.js';
import internshipAction from '../actions/internshipAction.js';

class internshipStore {
  
  constructor() {
    
    this.internships = [];
    this.appliedInternships = [];
    this.currentStage= 1;
    this.bindListeners({
      handleFetchInternship: internshipAction.FETCH_INTERNSHIP,
      handleFetchComplete:internshipAction.FETCH_COMPLETE,
      handleFetchFailure:internshipAction.FETCH_FAILURE,
      handleChangeState: internshipAction.CHANGE_STATE,
      handleFetchApplied: internshipAction.FETCH_APPLIED,
      handleFetchAppliedSuccess: internshipAction.FETCH_APPLIED_SUCCESS,
      handleFetchAppliedFailure: internshipAction.FETCH_APPLIED_FAILURE
    })
  }

  handleFetchInternship() {
    console.log("Initial Dispatcher")
  }

  handleFetchComplete(internships) {
    this.setState({internships: internships})
  }

  handleFetchFailure(error) {
    this.setState({errorMessage:error})
  }

  handleChangeState(stage) {
    this.setState({currentStage: stage})
  }

  handleFetchApplied(internships) {
    this.setState({appliedInternships: []})
  }

  handleFetchAppliedSuccess(res) {
    this.setState({appliedInternships: res})
  }

  handleFetchAppliedFailure(res) {
    this.setState({errorMessage:error})
  }
}

module.exports = alt.createStore(internshipStore, "internshipStore");
