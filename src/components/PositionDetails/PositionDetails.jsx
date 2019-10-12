import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Axios from "axios";
import * as applicationAPI from "../../utils/applicationService";

const PositionDetails = props => {
	let positionId = props.match.params.id;

	return (
		<>
			<h1>Position Details / Management Page, Applications? What's going on anymore...</h1>
			<Card>
				<Card.Header>
					<h1>HEADER of the CARD</h1>
				</Card.Header>
				<Card.Body>
					<Card.Title>TITLE OF THE CARD</Card.Title>
					<Card.Text>
						<h4>Position ID:</h4>
						<p>{positionId}</p>
					</Card.Text>
					<Link to={`/application/${positionId}`}>
						<Button>Manage Apps</Button>
					</Link>
				</Card.Body>
			</Card>
		</>
	);
};

export default PositionDetails;