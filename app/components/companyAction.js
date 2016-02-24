import alt from '../alt.js';
import API from '../components/API.js';
import companyAction from '../actions/companyAction.js';

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
    return res.company
  }

  loadCurrentFailure(res) {
    return res;
  }
}

module.exports = alt.createActions(companyAction);
