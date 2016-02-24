import alt from '../alt.js';
import API from '../components/API.js';
import companyAction from '../actions/companyAction.js';

class companyStore {
  
  constructor() {
    this.currentCompany = undefined;
    this.bindListeners({
      handleLoadCurrent: companyAction.LOAD_CURRENT,
      handleLoadCurrentComplete: companyAction.LOAD_CURRENT_COMPLETE,
      handleLoadCurrentFailure: companyAction.LOAD_CURRENT_FAILURE
    })
  }

  handleLoadCurrent() {
    console.log("Initial Dispatcher")
  }

  handleLoadCurrentComplete(company) {
    console.log("Complete dispatcher")
    this.setState({currentCompany: company})
  }

  handleLoadCurrentFailure(error) {
    console.log("Failure dispatcher")
  }
}

module.exports = alt.createStore(companyStore,'companyStore')