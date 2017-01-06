import React from 'react';
import {render} from 'react-dom';

import HelloComponent from './HelloComponent.jsx'

class App extends React.Component {
  render () {
  	return (
  		<div>
	  		<h1>Hello There!</h1>
	  		<HelloComponent />
  		</div>
  	);
  } 
}

render(<App/>, document.getElementById('app'));