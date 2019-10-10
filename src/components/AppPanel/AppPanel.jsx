import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AppPanel = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Subtitle>Application ID</Card.Subtitle>
				<Card.Title>{props.id}</Card.Title>
				<br />
				<Card.Subtitle>Applicant</Card.Subtitle>
				<Card.Text>{props.applicant}</Card.Text>
				<Card.Link>
					<Link to={`#`}>
						<Button>Approve</Button>
					</Link>
					<Link to={`#`}>
						<Button>Decline</Button>
					</Link>
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default AppPanel;
