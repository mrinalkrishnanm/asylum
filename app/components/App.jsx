import React from 'react'
import { RouteHandler } from 'react-router'
import Style from '../styles/app.scss'
import _ from 'lodash'

class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="issues">
        <h2> nullify </h2>
        <RouteHandler />
      </div>
    )
  }

};

module.exports = App;
