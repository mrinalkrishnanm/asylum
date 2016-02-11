import alt from '../alt.js'
import API from '../components/API.js'

class internshipAction {

  fetchInternship() {
    var url = API.url('internships');
    var _this = this
    var success = (res) => {
      console.log(res)
      console.log("Success")
      _this.fetchComplete(res);
    }
    var failure = (err) => {
      console.log(err)
      _this.fetchFailure(err);
    }
    API.get(url,success,failure)
  }

  fetchComplete(res) {
    return res.internships;
  }

  fetchFailure(err) {
    return err;
  }
  
  updateQuestions(questions){
    var url = API.url('questions')
    var _this = this
    var success = (res) => {
      console.log(res)
      console.log("Success")
      _this.fetchComplete(res.internships)
    }

    var failure = (err) => {
      console.log(err)
      _this.fetchFailure(err)
    }

    API.put(url,questions,success,failure)
  }

}

module.exports = alt.createActions(internshipAction);
