import React from 'react'
import { RouteHandler } from 'react-router'
import Style from '../styles/app.scss'
import Sidebar from './Sidebar.jsx'


class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="wrapper">
        <RouteHandler />
      </div>
    )
  }

};

module.exports = App;
