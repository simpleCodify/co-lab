import React, { Component } from "react";
import Axios from "axios";
import { Route, Switch } from "react-router-dom";
import PositionPanel from "../../components/PositionPanel/PositionPanel";
import PositionDetails from "../PositionDetails/PositionDetails";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

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

	// componentDidMount() {
	// 	const id = this.props.match.params.id;
	// 	Axios.get(`/api/projects/${id}`).then(res => {
	// 		const project = res.data;
	// 		this.setState({ project });
	// 	});
	// }

	async componentDidMount() {
		const id = this.props.match.params.id;
		const project = await projectAPI.getProjectDetails(id);
		this.setState({ project: project, positions: project.positions });

		// const { data } = await Axios.get(`/api/projects/${id}`);
		// this.setState({ project: data, positions: data.positions });
	}

	handleAddApplication = async newAppData => {
		const newApplication = await applicationAPI.create(newAppData);
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
			<div className="col-md-9 my-5 mx-auto text-center add-project-panel">
				<Jumbotron className="my-5 add-project-panel">
					<Container style={{ color: "#ffffff" }}>
						<h1>Project Details</h1>
						<h3>Project Name: {this.state.project.project_name}</h3>

						<h4>Project Description: {this.state.project.project_description}</h4>
						{this.state.project !== "" ? <h4>Project Owner: {this.state.project.project_owner.username}</h4> : "Loading..."}

						<h5>Project Team Size: {this.state.project.project_team_size}</h5>
					</Container>
				</Jumbotron>

				<br />

				<div className="row mx-auto">{this.state.project !== "" ? this.state.project.positions.map((pos, idx) => <PositionPanel key={idx} posnum={idx + 1} pos={pos} project={this.state.project} posid={pos._id} posuser={pos.user} posstatus={pos.status} user={this.state.user} onsubmit={this.handleSubmit} applyclick={this.handleApplyClick} />) : "Loading..."}</div>

				<Switch>
					<Route path="/projects/position/:id" component={PositionDetails} positionData={this.state.positions} />
				</Switch>
			</div>
		);
	}
}
