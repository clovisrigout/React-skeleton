import React from 'react';
import {render} from 'react-dom';

import UserStore from '../../data/stores/UserStore.js';
import UserActionCreator from '../../data/actions/UserActionCreator.js';

class User extends React.Component {
  
  constructor(props) {
  	super(props)
  	this.state = {
  		user: {}
  	}
  	this.onChange = this.onChange.bind(this)
  }

  onChange() {
  	this.setState({
  		user: UserStore.user
  	});
  }

  componentWillMount() {
  	UserStore.addChangeListener(this.onChange)
  }

  componentDidMount() {
    UserActionCreator.createUser(1, "nicky");
  }

  componentWillUnmount() {
  	UserStore.removeChangeListener(this.onChange)
  }

  render() {
  	var user = this.state.user
  	console.log(user)
  	return (
  	  <div>
  	  	{Object.keys(user).length != 0 &&
  	  	  <div>
	  	    <h1>{user.id}</h1>
	  	    <h2>{user.username}</h2>
  	      </div>
	  	}
  	  </div>
  	);
  }
}

export default User
