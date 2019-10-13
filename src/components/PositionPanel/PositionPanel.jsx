import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PositionPanel = props => {
	return (
		<div className="col-md-3 mx-auto my-4">
			<form onSubmit={props.onsubmit}>
				<Card style={{ backgroundColor: "#00334e", color: "white", borderRadius: "25px" }}>
					<Card.Body>
						<Card.Title>{props.posnum}</Card.Title>
						<Card.Subtitle>{props.posuser}</Card.Subtitle>
						<br />
						<Card.Text>{props.posstatus}</Card.Text>
						{props.project.project_applications.length !== 0 && props.posstatus !== "Filled" ? <Card.Text>{props.project.project_applications.length} Applications</Card.Text> : ""}

						{/* Create Application if UserID !== POSuser*/}

						{props.posuser !== props.user._id && props.posstatus == "Open" && !props.project.project_members.includes(props.user._id) ? (
							<>
								<div className="svg-wrapper mx-auto my-5 text-center">
									<svg height="35" width="200">
										<rect className="mx-auto my-auto shape" height="35" width="200" />
									</svg>
									<button className="text2 rr_link2 mx-auto my-auto" type="submit" onClick={props.applyclick} value={props.posid}>
										Apply
									</button>
								</div>
							</>
						) : (
							<></>
						)}

						{props.user._id == props.project.project_owner._id ? (
							<div className="svg-wrapper mx-auto my-5 text-center">
								<svg height="35" width="200">
									<rect className="mx-auto my-auto shape" height="35" width="200" />
								</svg>
								<Link className="text2 rr_link2 mx-auto my-auto" to={`/application/${props.posid}`}>
									manage
								</Link>
							</div>
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
