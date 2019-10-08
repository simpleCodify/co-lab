import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PositionPanel = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>{props.posid}</Card.Title>
				<Card.Subtitle>{props.posuser}</Card.Subtitle>
				<br />
				<Card.Text>{props.posstatus}</Card.Text>

				{/* Create Application if UserID !== POSuser*/}

				{props.posuser !== props.user._id ? (
					<form onSubmit={props.onsubmit}>
						<Button type="submit">Apply</Button>
					</form>
				) : (
					""
				)}
			</Card.Body>
		</Card>
	);
};

export default PositionPanel;
