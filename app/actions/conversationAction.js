import alt from '../alt.js'
import API from '../components/API.js'


class conversationAction {

  fetchAll() {
    
    var url = API.url('conversations')
    var _this = this

    var success = (res) => {
      console.log(res)
      console.log("Fetched conversations")
      _this.fetchComplete(res)
    }

    var failure = (err) => {
      console.log(err)
    }
    
    API.get(url,success,failure)
  }

  fetchComplete(res) {
    return res.conversations;
  }
}

module.exports = alt.createActions(conversationAction)
