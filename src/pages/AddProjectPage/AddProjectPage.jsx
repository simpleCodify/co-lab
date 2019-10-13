import React, { Component } from "react";

// Importing React-Bootstrap Components
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

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
				<div className="col-md-6 my-5 mx-auto text-center add-project-panel">
					<Jumbotron className="my-5 add-project-panel">
						<Container style={{ color: "#ffffff" }}>
							<h1>Start a Project!</h1>
							<p>Let's get Started by first creating your project!</p>
						</Container>
					</Jumbotron>
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
									<option value={4}>4</option>
									<option value={5}>5</option>
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
										<Form.Control placeholder="Github Link" value={this.state.formData.project_github_link} name="project_github_link" onChange={this.handleChange} />
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
										<Form.Label>Other Link</Form.Label>
										<Form.Control placeholder="Other Link" value={this.state.formData.project_other_links} name="project_other_links" onChange={this.handleChange} />
									</Form.Group>
								</Form.Row>
							</Accordion.Collapse>
						</Accordion>
						<div className="svg-wrapper mx-auto my-5 text-center">
							<svg height="35" width="200">
								<rect className="mx-auto my-auto shape" height="35" width="200" />
							</svg>
							<button className="text2 rr_link2 mx-auto my-auto" type="submit">
								Submit
							</button>
						</div>
					</Form>
				</div>
			</>
		);
	}
}

export default AddProjectPage;
