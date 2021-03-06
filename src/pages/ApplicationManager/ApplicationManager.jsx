import React, { Component } from "react";

// Importing Components
import AppPanel from "../../components/AppPanel/AppPanel";

// Importing Services API
import * as applicationAPI from "../../utils/applicationService";

class ApplicationManager extends Component {
	constructor(props) {
		super(props);
		this.state = {
			applications: [],
			applicants: []
		};
	}

	async componentDidMount() {
		const id = this.props.match.params.id;
		const applications = await applicationAPI.getPosApplications(id);
		this.setState({ applications });
	}

	handleApproveApp = async e => {
		e = e.target.value;
		await applicationAPI.appApprove(e);
		// this.props.history.push("/projects");
		this.props.history.goBack();
	};

	handleRejectApp = async e => {
		e = e.target.value;
		await applicationAPI.appReject(e);
		this.props.history.goBack();
	};

	render() {
		return <>{this.state.applications !== "" ? this.state.applications.map((app, idx) => <AppPanel key={idx} id={app._id} applicant={app.applicant} approveApp={this.handleApproveApp} rejectApp={this.handleRejectApp} />) : <h1>There are no Applications...</h1>}</>;
	}
}

export default ApplicationManager;
