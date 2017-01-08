import React from 'react';
import {render} from 'react-dom';

import Hello from './hello/Hello.jsx';
import Home from './home/Home.jsx';
import NavLink from './nav/NavLink.jsx';
import NavBar from './nav/NavBar.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar/>
      {this.props.children || <Home/>}
      </div>
    );
  }
}

export default App
