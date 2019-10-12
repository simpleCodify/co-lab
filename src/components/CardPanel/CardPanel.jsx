import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import "./CardPanel.css";

const CardPanel = props => {
	return (
		<Card>
			<Card.Header>
				<Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
					<h3>{props.name}</h3>
					<hr />
					<h5 className="text-muted">{props.desc}</h5>
				</Accordion.Toggle>
			</Card.Header>
			<Accordion.Collapse eventKey={props.eventKey}>
				<Card.Body>
					<Card.Title>Project Leader: {props.owner}</Card.Title>
					<Card.Subtitle>Project Members: {props.members !== "" ? props.members.map(member => <p>{member.username}</p>) : "Loading..."}</Card.Subtitle>
					<br />
					<Card.Text>{props.desc}</Card.Text>
					<Card.Subtitle>{props.team_size}</Card.Subtitle>
					<Card.Link>
						<Link to={`/projects/${props.id}`}>Details</Link>
					</Card.Link>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

export default CardPanel;
