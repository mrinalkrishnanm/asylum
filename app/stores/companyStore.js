import alt from '../alt.js';
import API from '../components/API.js';
import companyAction from '../actions/companyAction.js';

class companyStore {
  
  constructor() {
    this.currentCompany = undefined;
    this.companyInternships = [];
    this.bindListeners({
      handleLoadCurrent: companyAction.LOAD_CURRENT,
      handleLoadCurrentComplete: companyAction.LOAD_CURRENT_COMPLETE,
      handleLoadCurrentFailure: companyAction.LOAD_CURRENT_FAILURE,
      handleLoadCreated: companyAction.LOAD_CREATED,
      handleLoadCreatedComplete: companyAction.LOAD_CREATED_COMPLETE,
      handleFetchApplication: companyAction.FETCH_APPLICATION,
      handleFetchApplicationComplete: companyAction.FETCH_APPLICATION_COMPLETE
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

  handleLoadCreatedComplete(res) {
    this.setState({companyInternships: res.internships})
  }

  handleLoadCreated() {
    console.log("Initial dispatcher for created_internships")
  }

  handleFetchApplication() {
    console.log("Initial dispatcher")
  }
  handleFetchApplicationComplete(res) {
    this.setState({application:res})
  }

}

module.exports = alt.createStore(companyStore,'companyStore')
