import React from 'react';
import {render} from 'react-dom';

import Hello from './hello/Hello.jsx';
import Home from './home/Home.jsx';
import NavLink from './nav/NavLink.jsx';

class App extends React.Component {
  render () {
  	return (
  		<div>
  			<h1>Main App</h1>
	  		<ul role="nav">
				<li><NavLink to="/about">About</NavLink></li>
				<li><NavLink to="/hello">Hello</NavLink></li>
			</ul>
			{this.props.children || <Home/>}
  		</div>
  	);
  }
}

export default App
