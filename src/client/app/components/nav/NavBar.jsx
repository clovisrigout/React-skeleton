import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class NavBar extends React.Component {
  render() {
    return (
    	<Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/#/">Spontad</a>
		      </Navbar.Brand>
		    </Navbar.Header>
			<Nav bsStyle="tabs" >
				<NavItem eventKey="1" href="/#/">Home</NavItem>
				<NavItem eventKey="3" href="/#/hello">Hello</NavItem>
			</Nav>
			<Nav bsStyle="tabs" pullRight>
				<NavItem eventKey="1" href="/#/about">About</NavItem>
			</Nav>
		</Navbar>
    )
  }
}

export default NavBar;
