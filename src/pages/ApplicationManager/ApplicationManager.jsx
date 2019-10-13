import React, { Component } from "react";
import AppPanel from "../../components/AppPanel/AppPanel";
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
		const applications = await applicationAPI.getPosApplications(this.props.match.params.id);
		this.setState({ applications });
	}

	handleApproveApp = async e => {
		e = e.target.value;
		await applicationAPI.appApprove(e);
	};

	handleRejectApp = async e => {
		e = e.target.value;
		await applicationAPI.appReject(e);
	};

	render() {
		return <>{this.state.applications !== "" ? this.state.applications.map((app, idx) => <AppPanel key={idx} id={app._id} applicant={app.applicant} approveApp={this.handleApproveApp} rejectApp={this.handleRejectApp} />) : "Loading..."}</>;
	}
}

export default ApplicationManager;
