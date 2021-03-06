import React, { Component } from "react";

// Importing Components
import CardPanel from "../CardPanel/CardPanel";

// Importing React-Bootstrap Components
import Accordion from "react-bootstrap/Accordion";

class CardContainer extends Component {
	render() {
		let project = this.props.projects.map((proj, idx) => {
			return <CardPanel key={idx} eventKey={idx} id={proj._id} proj={proj} name={proj.project_name} team_size={proj.project_team_size} members={proj.project_members} owner={proj.project_owner.username} desc={proj.project_description} />;
		});

		return (
			<Accordion>
				<div className="col-md-6 mx-auto">{project}</div>
			</Accordion>
		);
	}
}

export default CardContainer;
