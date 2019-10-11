import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CardPanel from "../CardPanel/CardPanel";
import Accordion from "react-bootstrap/Accordion";

class CardContainer extends Component {
	render() {
		let project = this.props.projects.map((proj, idx) => {
			return <CardPanel key={idx} eventKey={idx} id={proj._id} name={proj.project_name} team_size={proj.project_team_size} owner={proj.project_owner} desc={proj.project_description} />;
		});

		return (
			<Accordion>
				<div>{project}</div>
			</Accordion>
		);
	}
}

export default CardContainer;
