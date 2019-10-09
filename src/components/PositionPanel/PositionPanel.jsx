import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PositionPanel = props => {
	return (
		<form onSubmit={props.onsubmit}>
			<Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>{props.posid}</Card.Title>
					<Card.Subtitle>{props.posuser}</Card.Subtitle>
					<br />
					<Card.Text>{props.posstatus}</Card.Text>

					{/* Create Application if UserID !== POSuser*/}

					{props.posuser !== props.user._id && props.posstatus == "Open" && !props.project.project_members.includes(props.user._id) ? (
						<Button type="submit" onClick={props.applyclick} value={props.posid}>
							Apply
						</Button>
					) : (
						""
					)}
				</Card.Body>
			</Card>
		</form>
	);
};

export default PositionPanel;
