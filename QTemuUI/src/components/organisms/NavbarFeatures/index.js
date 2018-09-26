import React, {Component} from 'react';
import { 
	Navbar,
	NavbarBrand,
	NavbarNav,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink
	} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
// import './style.css';

export default class NavbarFeatures extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
				collapse: false,
				isWideEnough: false,
		};
  this.onClick = this.onClick.bind(this);
  }

  onClick(){
		this.setState({
				collapse: !this.state.collapse,
		});
	}

  render() {
		return (
			<Router>
				<Navbar dark color="indigo" dark expand="md" sticky="top">
					<NavbarBrand href="/">
						<strong>QTemu</strong>
					</NavbarBrand>
					{ !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
					<Collapse isOpen = { this.state.collapse } navbar>
						<NavbarNav left>
							<NavItem active>
								<NavLink to="#">Create Meetup</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="#">Explore</NavLink>
							</NavItem>
						</NavbarNav>
						<NavbarNav right>
							<NavItem>
								<NavLink to="#">Login</NavLink>
							</NavItem>
						</NavbarNav>
					</Collapse>
				</Navbar>
			</Router>
		);
  }
}