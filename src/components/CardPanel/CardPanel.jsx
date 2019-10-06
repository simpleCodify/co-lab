import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import "./CardPanel.css";

const CardPanel = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Subtitle>{props.owner}</Card.Subtitle>
				<br />
				<Card.Text>{props.desc}</Card.Text>
				<Card.Subtitle>{props.team_size}</Card.Subtitle>
				<Card.Link>
					<Link to={`/projects/${props.id}`}>Details</Link>
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default CardPanel;
