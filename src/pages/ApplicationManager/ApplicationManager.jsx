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

	render() {
		return (
			<>
				<h1>Application Listings ! Only the Applications for this Position should show!</h1>

				{this.state.applications !== "" ? this.state.applications.map((app, idx) => <AppPanel key={idx} id={app._id} applicant={app.applicant} />) : "Loading..."}
			</>
		);
	}
}

export default ApplicationManager;
