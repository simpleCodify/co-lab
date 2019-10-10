import React, { Component } from "react";
import Axios from "axios";
import { Route, Switch } from "react-router-dom";
import PositionPanel from "../../components/PositionPanel/PositionPanel";
import PositionDetails from "../PositionDetails/PositionDetails";

import userService from "../../utils/userService.js";
import * as applicationAPI from "../../utils/applicationService";

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
		const { data } = await Axios.get(`/api/projects/${id}`);
		this.setState({ project: data, positions: data.positions });
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
		console.log("Inside ProjectDetails.jsx : application data ::: ", applicationData);

		try {
			await this.handleAddApplication({ applicationData });
			// Is it possible to redirect to new project detail from history?
			console.log("Inside the TRY block from ProjectDetails : application data : ", applicationData);
			this.props.history.push("/projects");
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<>
				<h1>Project Details</h1>
				<h3>Project Name: {this.state.project.project_name}</h3>
				<ul>
					<li>Project Description: {this.state.project.project_description}</li>
					<li>Project Owner: {this.state.project.project_owner}</li>
					<li>Project Team Size: {this.state.project.project_team_size}</li>
					<br />
					{/* {this.state.project !== "" ? this.state.project.positions.map(pos => <p>{pos.status}</p>) : "Loading..."} */}
					{this.state.project !== "" ? this.state.project.positions.map((pos, idx) => <PositionPanel key={idx} project={this.state.project} posid={pos._id} posuser={pos.user} posstatus={pos.status} user={this.state.user} onsubmit={this.handleSubmit} applyclick={this.handleApplyClick} />) : "Loading..."}
				</ul>

				<h1>{this.state.user._id}</h1>
				<h1>{this.state.project.project_owner}</h1>
				<Switch>
					<Route path="/projects/position/:id" component={PositionDetails} positionData={this.state.positions} />
				</Switch>
			</>
		);
	}
}
