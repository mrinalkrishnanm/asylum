import alt from '../alt.js';
import API from '../components/API.js';

class userAction {

  loadCurrent(){
    console.log("Get called")
    var url = API.url('tokens/verify_token')
    var data = {
      token: localStorage.interno_token
    }
    var _this = this
    var success = (res) => {
      console.log(res);
      this.loadCurrentComplete(res);
      console.log("Success")
    }
    var failure = (res) => {
      console.log(res)
      console.log("Can't load current user");
      this.loadCurrentFailure(res);
    }
    API.post(url,data,success,failure)
  }

  loadCurrentComplete(user){
    return user.user
  }

  loadCurrentFailure(error) {
    return error;  
  }
  
}
module.exports = alt.createActions(userAction);
