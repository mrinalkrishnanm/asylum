"use strict";

import React from 'react';
import Router from 'react-router';
import Request from 'superagent';
import _ from 'lodash';

class ApplyStages extends React.Component{

  constructor () {
    super()
  }

  render () {
    return (
      <div className="apply-stages">
        <li className="stage-block"> </li>
        <li className="stage-block"> </li>
        <li className="stage-block"> </li>
      </div>
    );
  }
}

module.exports = ApplyStages;
