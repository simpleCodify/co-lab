import React, { Component } from "react";
import AppPanel from "../../components/AppPanel/AppPanel";
import axios from "axios";
import * as applicationAPI from "../../utils/applicationService";

class ApplicationManager extends Component {
	constructor(props) {
		super(props);
		this.state = { applications: [] };
	}

	async componentDidMount() {
		const applications = await applicationAPI.getPosApplications(this.props.match.params.id);
		this.setState({ applications });
	}

	handleApproveApp = async appData => {
		appData = this.props.match.params.id;
		await applicationAPI.appApprove(appData);

		// check req.body and send in this.props.match.params.id
	};

	render() {
		return (
			<>
				<h1>Application Listings ! Only the Applications for this Position should show!</h1>

				{this.state.applications !== "" ? this.state.applications.map((app, idx) => <AppPanel key={idx} id={app._id} applicant={app.applicant} approveApp={this.handleApproveApp} />) : "Loading..."}
			</>
		);
	}
}

export default ApplicationManager;
