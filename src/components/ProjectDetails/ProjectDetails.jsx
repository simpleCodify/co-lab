import React, { Component } from "react";

// Importing React-Router-Dom
import { Route, Switch } from "react-router-dom";

// Importing Components
import PositionPanel from "../../components/PositionPanel/PositionPanel";

// Importing React-Bootstrap Components
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

// Importing Services APIs
import userService from "../../utils/userService.js";
import * as applicationAPI from "../../utils/applicationService";
import * as projectAPI from "../../utils/projectService";

export default class ProjectDetails extends Component {
	state = {
		project: "",
		positions: "",
		user: userService.getUser(),
		target_position: ""
	};

	async componentDidMount() {
		const id = this.props.match.params.id;
		const project = await projectAPI.getProjectDetails(id);
		this.setState({ project: project, positions: project.positions });
	}

	handleAddApplication = async newAppData => {
		await applicationAPI.create(newAppData);
	};

	handleApplyClick = e => {
		this.setState({ target_position: e.target.value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		console.log(e.target.value);
		let applicationData = {
			target_project: this.state.project._id,
			applicant: this.state.user._id,
			target_position: this.state.target_position
		};

		try {
			await this.handleAddApplication({ applicationData });
			// Is it possible to redirect to new project detail from history?
			this.props.history.push("/projects");
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<Container>
				<Row className="mt-5">
					<div className="col-8 mx-auto">
						<Card className="app-panel">
							<Card.Body>
								<Row>
									<div className="col-12 col-lg-8 col-md-6 text-left">
										<h3 className="mb-0 text-truncated">{this.state.project.project_name}</h3>
										{this.state.project !== "" ? <small className="mb-5 text-truncated text-muted">created by {this.state.project.project_owner.username}</small> : "Loading..."}
										<p className="mt-4 mb-3 text-truncated">{this.state.project.project_description}</p>
										{this.state.project !== "" && this.state.project.project_members !== "" ? <small className="mb-0 text-truncated">co-Lab of</small> : ""}
										{this.state.project !== "" ? this.state.project.project_members.map(member => (member.username !== "" ? <span className="mb-0 text-truncated"> {member.username} </span> : "")) : ""}
										<p className="my-5"></p>

										{this.state.project.project_github_link !== null ? (
											<Badge className="mr-2" pill variant="dark">
												<a className="rr_link2" href={this.state.project.project_github_link}>
													github
												</a>
											</Badge>
										) : (
											""
										)}
										{this.state.project.project_slack_link !== null ? (
											<Badge className="mr-2" pill variant="warning">
												<a className="rr_link2" href={this.state.project.project_slack_link}>
													slack
												</a>
											</Badge>
										) : (
											""
										)}
										{this.state.project.project_trello_link !== null ? (
											<Badge className="mr-2" pill variant="info">
												<a className="rr_link2" href={this.state.project.project_trello_link}>
													trello
												</a>
											</Badge>
										) : (
											""
										)}
									</div>
								</Row>
								<Accordion className="my-5">
									<Accordion.Toggle as={Card.Header} eventKey="positions">
										<Card.Title>Positions</Card.Title>
									</Accordion.Toggle>

									<Accordion.Collapse eventKey="positions">
										<div className="row mx-auto">{this.state.project !== "" ? this.state.project.positions.map((pos, idx) => <PositionPanel key={idx} posnum={idx + 1} pos={pos} project={this.state.project} posid={pos._id} posuser={pos.user} posstatus={pos.status} user={this.state.user} onsubmit={this.handleSubmit} applyclick={this.handleApplyClick} />) : "Loading..."}</div>
									</Accordion.Collapse>
								</Accordion>
							</Card.Body>
						</Card>
					</div>
				</Row>
			</Container>
		);
	}
}
