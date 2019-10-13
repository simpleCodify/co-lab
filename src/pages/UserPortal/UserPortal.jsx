import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import ColabButton from "../../components/CoLabButton/CoLabButton";

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
					<Accordion>
						<Accordion.Toggle as={Card.Header} eventKey="signup" style={{ backgroundColor: "#5588a3" }}>
							<Card.Title>Sign Up</Card.Title>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="signup">
							<Form onSubmit={this.handleSignupSubmit}>
								<Form.Row>
									<Form.Control className="text-center" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center" type="name" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center" type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
									<Form.Control className="text-center" type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
								</Form.Row>
								<div className="svg-wrapper mx-auto my-5 text-center">
									<svg height="35" width="200">
										<rect className="mx-auto my-auto shape" height="35" width="200" />
									</svg>
									<button className="text2 rr_link2 mx-auto my-auto" type="submit" disabled={this.isFormInvalid()}>
										Sign Up
									</button>
								</div>
							</Form>
						</Accordion.Collapse>
						<Accordion.Toggle as={Card.Header} eventKey="login" style={{ backgroundColor: "#5588a3" }}>
							<Card.Title>Login</Card.Title>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="login">
							<Form onSubmit={this.handleLoginSubmit}>
								<Form.Row>
									<Form.Control className="text-center" type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
								</Form.Row>
								<Form.Row>
									<Form.Control className="text-center" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
								</Form.Row>
								<div className="svg-wrapper mx-auto my-5 text-center">
									<svg height="35" width="200">
										<rect className="mx-auto my-auto shape" height="35" width="200" />
									</svg>
									<button className="text2 rr_link2 mx-auto my-auto" type="submit">
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
