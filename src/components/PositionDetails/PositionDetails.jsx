import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

const PositionDetails = props => {
	let positionId = props.match.params.id;

	return (
		<div className="col-md-6 mx-auto">
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

			<Card style={{ width: "18rem" }}>
				<ListGroup variant="flush">
					<ListGroup.Item>Cras justo odio</ListGroup.Item>
					<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
					<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
				</ListGroup>
			</Card>
		</div>
	);
};

export default PositionDetails;
