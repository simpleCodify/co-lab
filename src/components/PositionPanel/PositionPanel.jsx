import React from "react";

// Importing React-Router-Dom
import { Link } from "react-router-dom";

// Importing React-Bootstrap Components
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const PositionPanel = props => {
	return (
		<Container fluid>
			<form onSubmit={props.onsubmit}>
				<Row className="mt-5">
					<div className="col-12 mx-auto">
						<Card className="app-panel">
							<Card.Body>
								<Row>
									<div className="col-12 col-lg-8 col-md-6 text-left">
										<p className="mb-0 text-truncated text-muted">{props.posnum}</p>
										{/* <p className="mb-0 text-truncated text-muted">{props.posstatus}</p> */}

										{props.pos.user !== null ? <p className="mb-0 text-truncated">{props.posstatus}</p> : <p className="mb-0 text-truncated">Open</p>}
										{props.pos.user !== props.user._id && props.project.project_owner._id !== props.user._id && props.pos.user == null ? <p className="mb-0 text-truncated">Apply Now!</p> : ""}
									</div>
									{props.posuser !== props.user._id && props.posstatus == "Open" && !props.project.project_members.includes(props.user._id) ? (
										<div className="svg-wrapper mx-auto text-center">
											<svg height="35" width="200">
												<rect className="mx-auto my-auto shape" height="35" width="200" />
											</svg>
											<button className="text rr_link mx-auto my-auto" type="submit" onClick={props.applyclick} value={props.posid}>
												Apply
											</button>
										</div>
									) : (
										<></>
									)}

									{props.user._id == props.project.project_owner._id ? (
										<div className="svg-wrapper mx-auto my-5 text-center">
											<svg height="35" width="200">
												<rect className="mx-auto my-auto shape" height="35" width="200" />
											</svg>
											<Link className="text rr_link mx-auto my-auto" to={`/application/${props.posid}`}>
												manage
											</Link>
										</div>
									) : (
										<></>
									)}
								</Row>
							</Card.Body>
						</Card>
					</div>
				</Row>
			</form>
		</Container>
	);
};

export default PositionPanel;
