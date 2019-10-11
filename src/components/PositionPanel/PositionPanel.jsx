import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PositionPanel = props => {
	return (
		<div className="col-md-3 mx-auto">
			<form onSubmit={props.onsubmit}>
				<Card>
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
							<></>
						)}

						{props.user._id == props.project.project_owner ? (
							<Link to={`/projects/position/${props.posid}`}>
								<Button>Manage</Button>
							</Link>
						) : (
							<></>
						)}
					</Card.Body>
				</Card>
			</form>
		</div>
	);
};

export default PositionPanel;
