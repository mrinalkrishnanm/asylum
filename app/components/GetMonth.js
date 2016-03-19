import _ from 'lodash';

module.exports = {
  
  lastMonths: function(n) {
    var today = new Date();
    var months = ["January","February","March","April","May","June",
      "July","August","September","October","November","December"]

    var result = [];
    var currentMonth = today.getMonth();

    for(var i=0;i<n;i++) {
    	result.push(months[currentMonth])
      currentMonth--;
      if(currentMonth<0) {
      	currentMonth = 12 + currentMonth;
      }
    }
    
    return result;
  }
}
