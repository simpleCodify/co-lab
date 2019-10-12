import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import userService from "../../utils/userService";
import Axios from "axios";

const AppPanel = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Subtitle>Application ID</Card.Subtitle>
				<Card.Title>{props.id}</Card.Title>
				<br />
				<Card.Subtitle>Applicant</Card.Subtitle>
				<Card.Text>{props.applicant.username}</Card.Text>
				<Card.Subtitle>{props.applicant.email}</Card.Subtitle>

				<Button onClick={props.approveApp} value={props.id}>
					Approve
				</Button>
				<Button onClick={props.rejectApp} value={props.id}>
					Reject
				</Button>
			</Card.Body>
		</Card>
	);
};

export default AppPanel;
