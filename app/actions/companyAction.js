import alt from '../alt.js';
import API from '../components/API.js';
import _ from 'lodash';

class companyAction {

  loadCurrent() {
    var url = API.url('tokens/verify_token')
    var data = {
      token: localStorage.interno_company_token
    }

    var _this = this
    var success = (res) => {
      console.log(res);
      _this.loadCurrentComplete(res);
      console.log("Success")
    }

    var failure = (res) => {
      console.log(res)
      console.log("Can't load current user")
      _this.loadCurrentFailure(res)
    }
    API.post(url,data,success,failure)
  }

  loadCurrentComplete(res) {
    return res
  }

  loadCurrentFailure(res) {
    return res;
  }

  loadCreated() {
    var url = API.url('internships/company_internships')

    var _this = this
    var success = (res) => {
      _this.loadCreatedComplete(res);
    }

    var failure = (res) => {
      console.log("failure")
    }

    API.get(url,success,failure)
  }

  loadCreatedComplete(res) {
    return res;
  }

  fetchApplication(id) {
    var url = API.url('internizes', id)
    var _this = this
    var success = (res) => {
      console.log(res)
      _this.fetchApplicationComplete(res)
    }
    var failure = (res) => {
      console.log(res)
    }

    API.get(url,success,failure)
  }

  fetchApplicationComplete(res) {
    return res.internize;
  }
  
  loadApplications() {
    var url = API.url('internizes/all_applications')
    var _this = this
    var success = (res) => {
      _this.loadApplicationsComplete(res)
    }
    var failure = (res) => {
      console.log(res)
    }

    API.get(url,success,failure)
  }

  loadApplicationsComplete(res) {
    var response = _.flatten(res.internizes)
    return response;
  }


//FETCHED APPLICATIONS! NOW, PASS IT TO CHARTS PAGE(DASHBOARD)
}

module.exports = alt.createActions(companyAction);
