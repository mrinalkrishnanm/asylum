import React from 'react'
import { RouteHandler } from 'react-router'
import Style from '../styles/app.scss'
import _ from 'lodash'
import Sidebar from './Sidebar.jsx'

class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="wrapper">
        <Sidebar />
        <RouteHandler />
      </div>
    )
  }

};

module.exports = App;
