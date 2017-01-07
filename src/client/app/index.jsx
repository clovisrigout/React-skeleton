import React from 'react';
import {render} from 'react-dom';
import {hashHistory, Router, Route, IndexRoute} from 'react-router'

import App from './components/App.jsx'
import About from './components/about/About.jsx'
import Hello from './components/hello/Hello.jsx';

render(
  <Router history={hashHistory}>
	<Route path="/" component={App}>
		<Route path="/about" component={About}/>
		<Route path="/hello" component={Hello}/>
	</Route>
  </Router>,
  document.getElementById('root')
);
