import React from "react";

// Importing React-Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = props => {
	let nav = props.user ? (
		<Navbar collapseOnSelect expand="lg">
			<Navbar.Brand href="/">co-Lab</Navbar.Brand>
			<Navbar.Toggle className="mr-auto" aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href={`/profile/${props.user._id}`}>Profile</Nav.Link>
					<NavDropdown title="Projects" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/projects/">View Projects</NavDropdown.Item>
						<NavDropdown.Item href="/projects/add">Create Project</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/applications">Applications</NavDropdown.Item>
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
		<Navbar className="navbar" collapseOnSelect expand="lg">
			<Navbar.Brand href="/">co-Lab</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/projects/">Projects</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="/portal">Portal</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

	return <div className="NavBar">{nav}</div>;
};

export default NavBar;
