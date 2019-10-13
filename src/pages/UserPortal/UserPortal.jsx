import React, { Component } from "react";

// Importing React-Bootstrap Components
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Importing Components
import ColabButton from "../../components/CoLabButton/CoLabButton";

// Importing Services API
import userService from "../../utils/userService";

class UserPortal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			passwordConf: "",
			username: "",
			name: "",
			message: ""
		};
	}

	updateMessage = msg => {
		this.setState({ message: msg });
	};

	handleChange = e => {
		this.updateMessage("");
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSignupSubmit = async e => {
		e.preventDefault();
		try {
			await userService.signup(this.state);
			this.props.history.push("/");
		} catch (err) {
			this.props.updateMessage(err.message);
		}
	};

	handleLoginSubmit = async e => {
		e.preventDefault();
		try {
			await userService.login(this.state);
			this.props.handleSignupOrLogin();
			this.props.history.push("/");
		} catch (err) {
			alert("Invalid Credentials!");
		}
	};

	isFormInvalid() {
		return !(this.state.username && this.state.name && this.state.email && this.state.password === this.state.passwordConf);
	}

	render() {
		return (
			<>
				<div className="col-md-3 mx-auto my-5">
					<Accordion defaultActiveKey="login">
						<Accordion.Toggle as={Card.Header} eventKey="signup" style={{ backgroundColor: "#5588a3" }}>
							<Card.Title style={{ color: "white" }}>Sign Up</Card.Title>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="signup">
							<Form className="col-md-11 mx-auto my-5 text-center" onSubmit={this.handleSignupSubmit}>
								<Form.Row>
									<Form.Control className="text-center mb-1" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center mb-1" type="name" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center mb-1" type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center mb-1" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
									<Form.Control className="text-center" type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
								</Form.Row>
								<div className="svg-wrapper mx-auto my-5 text-center">
									<svg height="35" width="200">
										<rect className="mx-auto my-auto shape" height="35" width="200" />
									</svg>
									<button className="text rr_link mx-auto my-auto" type="submit" disabled={this.isFormInvalid()}>
										Sign Up
									</button>
								</div>
							</Form>
						</Accordion.Collapse>
						<Accordion.Toggle as={Card.Header} eventKey="login" style={{ backgroundColor: "#5588a3" }}>
							<Card.Title style={{ color: "white" }}>Login</Card.Title>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="login">
							<Form className="col-md-11 mx-auto my-5 text-center" onSubmit={this.handleLoginSubmit}>
								<Form.Row>
									<Form.Control className="text-center mb-1" type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
								</Form.Row>
								<div className="svg-wrapper mx-auto my-5 text-center">
									<svg height="35" width="200">
										<rect className="mx-auto my-auto shape" height="35" width="200" />
									</svg>
									<button className="text rr_link mx-auto my-auto" type="submit">
										Login
									</button>
								</div>
							</Form>
						</Accordion.Collapse>
					</Accordion>
				</div>
				<ColabButton btnname={"cancel"} linkto={"/"} />
			</>
		);
	}
}

export default UserPortal;
