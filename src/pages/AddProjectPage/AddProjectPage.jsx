import React, { Component } from "react";
import "./AddProjectPage";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

import userService from "../../utils/userService";

class AddProjectPage extends Component {
	state = {
		formData: {
			project_name: "",
			project_team_size: "1",
			project_description: "",
			project_members: [],
			positions: []
		}
	};

	formRef = React.createRef();

	handleSubmit = async e => {
		e.preventDefault();
		try {
			await this.props.handleAddProject(this.state.formData);
			// Is it possible to redirect to new project detail from history?
			this.props.history.push("/projects");
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = e => {
		const formData = { ...this.state.formData, [e.target.name]: e.target.value };
		this.setState({
			formData
		});
	};

	render() {
		return (
			<>
				<h1>Add a Project</h1>
				{/* <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Project Name (required) </label>
						<input className="form-control" name="project_name" value={this.state.formData.project_name} onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label>Project Description</label>
						<input className="form-control" name="project_description" value={this.state.formData.project_description} onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label>Project Team Size</label>
						<input className="form-control" name="project_team_size" value={this.state.formData.project_team_size} onChange={this.handleChange} required />
					</div>


					<Button type="submit" disabled={this.state.invalidForm}>
						Create Project
					</Button>
				</form> */}

				<div className="col-md-6 my-5 mx-auto text-center">
					<h1> Profile Edit </h1>
					<p>Edit your Profile</p>
					<Form onSubmit={this.handleSubmit}>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label as={Card.Header}>Project Name</Form.Label>
								<Form.Control placeholder="Name of Project" value={this.state.formData.project_name} name="project_name" onChange={this.handleChange} />
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Concept of Project</Form.Label>
								<Form.Control placeholder="Concept of Project" value={this.state.formData.project_description} name="project_description" onChange={this.handleChange} />
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Team-Size</Form.Label>
								<Form.Control as="select" value={this.state.formData.project_team_size} name="project_team_size" onChange={this.handleChange}>
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
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
										<Form.Label>Github Repository</Form.Label>
										<Form.Control placeholder="Github Link" value={this.state.formData.github_link} name="github_link" onChange={this.handleChange} />
									</Form.Group>

									<Form.Group as={Col}>
										<Form.Label>Slack Workspace</Form.Label>
										<Form.Control placeholder="Slack Link" value={this.state.formData.project_slack_link} name="project_slack_link" onChange={this.handleChange} />
									</Form.Group>

									<Form.Group as={Col}>
										<Form.Label>Trello Planner</Form.Label>
										<Form.Control placeholder="Trello Link" value={this.state.formData.project_trello_link} name="project_trello_link" onChange={this.handleChange} />
									</Form.Group>

									<Form.Group as={Col}>
										<Form.Label>Other Links</Form.Label>
										<Form.Control placeholder="Other Links" value={this.state.formData.project_other_links} name="project_other_links" onChange={this.handleChange} />
									</Form.Group>
								</Form.Row>
							</Accordion.Collapse>
						</Accordion>

						<Button className="my-5" variant="outline-info" type="submit">
							Submit
						</Button>
					</Form>
				</div>
			</>
		);
	}
}

export default AddProjectPage;
