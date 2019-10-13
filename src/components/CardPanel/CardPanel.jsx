import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

import "./CardPanel.css";

const CardPanel = props => {
	return (
		<Card className="my-3">
			<Card.Header>
				<Accordion.Toggle as={Card.Header} eventKey={props.eventKey} style={{ backgroundColor: "#5588a3", color: "white" }}>
					<h3>{props.name}</h3>
					<hr />
					<h5>{props.desc}</h5>
				</Accordion.Toggle>
			</Card.Header>
			<Accordion.Collapse eventKey={props.eventKey}>
				<Card.Body>
					<Card.Title>Project Leader: {props.owner}</Card.Title>
					<Card.Text>{props.desc}</Card.Text>
					<Card.Subtitle>
						Project Members: <p>{props.members !== "" ? props.members.map(member => <small>{member.username}</small>) : "Loading..."}</p>
					</Card.Subtitle>
					<br />
					<Card.Subtitle>{props.team_size}</Card.Subtitle>
					<Card.Link>
						<Link className="rr_link" to={`/projects/${props.id}`}>
							Details
						</Link>
					</Card.Link>
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

export default CardPanel;
