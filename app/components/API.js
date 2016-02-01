import _ from 'lodash';
import request from 'superagent';

module.exports = {
  
  mode: "development",

  __root: function () {
    return this.mode==="development" ? "http://localhost:3000/" : ""
  },

  url: function(path, id) {
    
    var id = id || null
    var baseUrl = this.__root() + path
    var url = (id === null) ?  baseUrl : baseUrl + "/" + id
   
    return url;
  },

  handleRequest: function(res,success,failure) {
    if(res.status == 200)
      success(res);
    else
      failure(res);
    
  },
  
  get: function(url, success, failure) {
    var _this = this
    request.get(url, function(err,res) {
      _this.handleRequest(res,success,failure)
    })
  },


  post: function(url, data, success, failure) {
    var _this = this
    console.log(data)
    request.post(url)
    .set('Authorization', 'Token token=' + localStorage.token)
    .send(data)
    .end((err,res) => {
      _this.handleRequest(res,success,failure)
      })

  }

}
