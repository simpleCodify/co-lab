import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Importing React-Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = props => {
	let nav = props.user ? (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/">Profile</Nav.Link>
					<NavDropdown title="Co-Lab" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/">View Projects</NavDropdown.Item>
						<NavDropdown.Item href="/">My Projects</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/">Applications</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav className="my-auto">
					<Nav.Link href="/" onClick={props.handleLogout}>
						Logout
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	) : (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/">Projects</Nav.Link>
				</Nav>
				<Nav>
					<NavDropdown title="Account" id="collapsible-nav-dropdown" className="ml-auto">
						<NavDropdown.Item href="/login">Login</NavDropdown.Item>
						<NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

	return <div className="NavBar">{nav}</div>;
};

export default NavBar;
