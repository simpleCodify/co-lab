import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import userService from "../../utils/userService";
import Card from "react-bootstrap/Card";

class ProfileForm extends Component {
	state = {
		_id: this.props.user._id
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		try {
			await userService.updateProfile(this.state);
			// Successfully signed up - show Login Page
			this.props.history.push("/profile:id");
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className="col-md-6 mx-auto text-center">
				<h1> Profile Edit </h1>
				<p>Edit your Profile</p>
				<Form onSubmit={this.handleSubmit}>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label as={Card.Header}>Username</Form.Label>
							<Form.Control type="username" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange} />
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Full Name</Form.Label>
							<Form.Control type="name" placeholder="Full Name" value={this.state.name} name="name" onChange={this.handleChange} />
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>Role</Form.Label>
							<Form.Control as="select" value={this.state.role} name="role" onChange={this.handleChange}>
								<option value={"Front-End Developer"}>Front-End Developer</option>
								<option value={"Back-End Developer"}>Back-End Developer</option>
								<option value={"UI/UX Designer"}>UI/UX Designer</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>

					<hr />
					<Accordion>
						<Accordion.Toggle as={Card.Header} eventKey="links">
							<Card.Title>Various Links</Card.Title>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="links">
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label>Github Profile</Form.Label>
									<Form.Control type="Email" placeholder="Github Link" value={this.state.github_link} name="github_link" onChange={this.handleChange} />
								</Form.Group>

								<Form.Group as={Col}>
									<Form.Label>LinkedIn Profile</Form.Label>
									<Form.Control type="Email" placeholder="LinkedIn Link" value={this.state.linkedin_link} name="linkedin_link" onChange={this.handleChange} />
								</Form.Group>
							</Form.Row>
						</Accordion.Collapse>
					</Accordion>

					<Button className="my-5" variant="outline-info" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default ProfileForm;
