import React from 'react';

import User from '../user/User.jsx';


class Hello extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <User/>
      </div>
    );
  }
  
}

export default Hello;