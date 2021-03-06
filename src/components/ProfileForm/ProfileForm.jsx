import React, { Component } from "react";

// Importing React-Bootstrap Components
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Importing Services API
import userService from "../../utils/userService";

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
			this.props.handleUpdateUser(this.state.user);
			this.props.history.goBack();
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div className="col-md-6 my-5 mx-auto text-center profile-form light-border">
				<p className="mt-5 lead">Edit your Profile</p>
				<Form className="my-5" onSubmit={this.handleSubmit}>
					<Form.Row className="my-5">
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
								<option value={"Please Select your Role"}>Please Select your Role</option>
								<option value={"Software Engineer"}>Software Engineer</option>
								<option value={"Front-End Developer"}>Front-End Developer</option>
								<option value={"React Developer"}>React Developer</option>
								<option value={"Angular Developer"}>Angular Developer</option>
								<option value={"Vue Developer"}>Vue Developer</option>
								<option value={"Back-End Developer"}>Back-End Developer</option>
								<option value={"Full-Stack Engineer"}>Full-Stack Engineer</option>
								<option value={"Database Administrator"}>Database Administrator</option>
								<option value={"Database Architect"}>Database Architect</option>
								<option value={"Java Engineer"}>Java Engineer</option>
								<option value={"Javascript Engineer"}>Javascript Engineer</option>
								<option value={"Python Engineer"}>Python Engineer</option>
								<option value={"Ruby Engineer"}>Ruby Engineer</option>
								<option value={"UI/UX Designer"}>UI/UX Designer</option>
								<option value={"Systems Architect"}>Systems Architect</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>

					<hr />
					<Accordion className="my-5">
						<Accordion.Toggle as={Card.Header} eventKey="links">
							<Card.Title>Various Links</Card.Title>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="links">
							<Form.Row className="">
								<Form.Group className="my-5" as={Col}>
									<Form.Label>Github Profile</Form.Label>
									<Form.Control type="Url" placeholder="Github Link" value={this.state.github_link} name="github_link" onChange={this.handleChange} />
								</Form.Group>

								<Form.Group className="my-5" as={Col}>
									<Form.Label>LinkedIn Profile</Form.Label>
									<Form.Control type="Url" placeholder="LinkedIn Link" value={this.state.linkedin_link} name="linkedin_link" onChange={this.handleChange} />
								</Form.Group>
							</Form.Row>
						</Accordion.Collapse>
					</Accordion>

					<div className="svg-wrapper mx-auto my-5 text-center">
						<svg height="35" width="200">
							<rect className="mx-auto my-auto shape" height="35" width="200" />
						</svg>
						<button className="text3 rr_link mx-auto my-auto" type="submit">
							Apply
						</button>
					</div>
				</Form>
			</div>
		);
	}
}

export default ProfileForm;
