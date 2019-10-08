import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import applicationService from "../../utils/applicationService";

const PositionPanel = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{props.posid}</Card.Title>
				<Card.Subtitle>{props.posuser}</Card.Subtitle>
				<br />
				<Card.Text>{props.posstatus}</Card.Text>

				{/* Create Application if UserID !== POSuser*/}

				{props.posuser !== props.user._id ? <Button type="submit">Apply</Button> : ""}
			</Card.Body>
		</Card>
	);
};

export default PositionPanel;
