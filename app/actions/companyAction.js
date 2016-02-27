import alt from '../alt.js';
import API from '../components/API.js';

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

}

module.exports = alt.createActions(companyAction);
