import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';
import { Line } from 'react-chartjs';

class CompanyDashboard extends React.Component{
  constructor() {
    super()
  }

  render() {
    var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
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

