import React from 'react';
import Router from 'react-router';
import routes from './routes';
import ReactDOM from 'react-dom';

Router.run(routes, Handler => ReactDOM.render(<Handler />, document.getElementById('app')));
