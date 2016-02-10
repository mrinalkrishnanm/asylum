import alt from '../alt.js';
import internshipAction from '../actions/internshipAction.js';

class internshipStore {
  constructor() {
    this.internships = [];
    this.currentStage= 1;
    this.bindListeners({
      handleFetchInternship: internshipAction.FETCH_INTERNSHIP,
      handleFetchComplete:internshipAction.FETCH_COMPLETE,
      handleFetchFailure:internshipAction.FETCH_FAILURE
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
}

module.exports = alt.createStore(internshipStore, "internshipStore");
