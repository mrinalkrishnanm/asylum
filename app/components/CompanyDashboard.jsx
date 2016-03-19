import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import { Line } from 'react-chartjs';
import GetMonth from './GetMonth.js'
import moment from 'moment';

class CompanyDashboard extends React.Component{
  constructor() {
    super()
  }

  render() {
    var applications = this.props.applications
    console.log(applications)
    var months = GetMonth.lastMonths(6);
    console.log(months)

    if(!_.isEmpty(applications))
      { var counter = 0;
        var _data = applications.map((app) => {
          var created_at = moment(app.created_at).format("MMMM");
          var _no = 0;
          for(var i=counter;i < months.length;i++)
          {
            if(created_at == months[i])
              _no++; //find count for each month
          }
          counter++;
          return _no;
        })
        for(var i=_data.length;i<6;i++)
        _data[i] = 0;
      }
      console.log(_data);
      var data = {
        labels: months,
        datasets: [
          {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: _data
          }
        ]
      }



      var options = {
        bezierCurve: false,
      }

      return(
        <div className='company-dashboard'>
          <h1> Internship Statistics </h1>
          <Line data={data} className="line-chart" options={options} />
        </div>
      )
  }
};

CompanyDashboard.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports=CompanyDashboard;

