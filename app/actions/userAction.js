import alt from '../alt.js';
import API from '../components/API.js';
import internshipAction from '../actions/internshipAction.js'
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
      _this.loadCurrentComplete(res);
      _this.hasResume(res.user)
      console.log("Success")
    }
    var failure = (res) => {
      console.log(res)
      console.log("Can't load current user");
      _this.loadCurrentFailure(res);
    }
    API.post(url,data,success,failure)
  }

  loadCurrentComplete(user){
    return user.user
  }

  loadCurrentFailure(error) {
    return error;  
  }

  isUploaded(bool) {
    return bool;
  }
  hasResume(user){

    console.log("Checking RESUME")
    var currentUser = user
    var id = currentUser.id
    var url = 'users/'+id+'/check_resume'
    var _url = API.url(url)
    var _this = this
    var success = (res) => {
      console.log("CHECKED RESUME")
      console.log(res)
      this.isUploaded(true)
      internshipAction.unlockStage(2)
      return res;
      
    }

    var failure = (res) => {
      console.log(res)
      console.log("FAILURE")
    }
    API.get(_url,success,failure)

  }
  
}
module.exports = alt.createActions(userAction);
