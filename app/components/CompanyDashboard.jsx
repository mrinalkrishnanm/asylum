import React from 'react';
import Router, {Link} from 'react-router';
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
    var _data = [0,0,0,0,0,0]
    if(!_.isEmpty(applications))
      { var counter = 0;
        _data = applications.map((app) => {
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
      console.log(months);
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


      if(!_.isEmpty(applications))
        {
          var notifications = applications.map(function(item) {
            var time = moment(item.created_at).fromNow();
            var name = item.user.first_name.charAt(0)+item.user.last_name.charAt(0)
            return (
              <div className="notification-box">
                <div className="notification-item">
                  <div className="user-avatar">
                    <span>{name}</span>
                  </div>
                  <p><em>{item.user.first_name} {item.user.last_name}</em> applied for {item.internship.position}</p> <small className="moment">{time}</small>
                  </div>
                </div>
                )
                })

                var reviewed_app = applications.filter((item) => {
                  return item.condition == "reviewed"
                })

                var counter = 0;
                var reviewed_display = reviewed_app.map((item) => {
                  ++counter;
                  var status = _.capitalize(item.condition)
                  return(
                    <tr>
                      <td> { counter } </td>
                      <td> {item.user.first_name} {item.user.last_name} </td>
                      <td><span className="status-msg orange">{status}</span></td>
                      <td><Link to="application" params={{id:item.id}}><button> View </button></Link></td>
                    </tr>
                    )
                })
                }
                return(
                <div>
                  <h1 className="title-text"> Dashboard </h1>
                  <div className='company-dashboard'>
                    <div className="company-dashboard-body">
                      <div className="internship-graph-box">
                        <h2> Internship Statistics </h2>
                        <Line data={data} className="line-chart" options={options} />
                      </div>
                      <div className="notification-container">
                        <h2> Notifications </h2>
                        {notifications}
                      </div>
                      <div className="applicant-list">
                        <table>
                          <thead>
                            <tr>
                              <th> # </th>
                              <th> Name </th>
                              <th> Status </th>
                              <th> Action </th>
                            </tr>
                          </thead>
                          <tbody>
                            {reviewed_display}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                )
                }
                };

                CompanyDashboard.contextTypes = {
                  router: React.PropTypes.func.isRequired
                }

                module.exports=CompanyDashboard;

