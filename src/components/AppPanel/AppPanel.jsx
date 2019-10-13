import React from "react";
import { Link } from "react-router-dom";

import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./AppPanel.css";

const AppPanel = props => {
	return (
		<>
			{/* <Card style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Subtitle>Application ID</Card.Subtitle>
					<Card.Title>{props.id}</Card.Title>
					<br />
					<Card.Subtitle>Applicant</Card.Subtitle>
					<Card.Text>{props.applicant.username}</Card.Text>
					<Card.Text>{props.applicant.role}</Card.Text>
					<Card.Subtitle>{props.applicant.email}</Card.Subtitle>
					<Card.Subtitle>{props.applicant.github_link}</Card.Subtitle>
					<Card.Subtitle>{props.applicant.linkedin_link}</Card.Subtitle>

					<Button onClick={props.approveApp} value={props.id}>
						Approve
					</Button>
					<Button onClick={props.rejectApp} value={props.id}>
						Reject
					</Button>
				</Card.Body>
			</Card> */}

			<Container className="my-5">
				<Row>
					<div className="col-8 mx-auto">
						<Card className="app-panel">
							<Card.Body>
								<Row>
									<div className="col-12 col-lg-8 col-md-6 text-left">
										<h3 className="mx-0 text-truncated">{props.applicant.username}</h3>
										<p className="mx-0 text-truncated lead">{props.applicant.role}</p>
										<p className="my-5">
											{/* <span className="badge badge-info pill tags">{props.applicant.github_link}</span> */}
											<Badge className="mr-3" pill variant="dark">
												<Link className="rr_link2" to={props.applicant.github_link}>
													github
												</Link>
											</Badge>
											<Badge pill variant="info">
												<Link className="rr_link2" to={props.applicant.linkedin_link}>
													LinkedIn
												</Link>
											</Badge>

											{/* <span className="badge badge-info pill tags">{props.applicant.linkedin_link}</span> */}
										</p>
										<h3 className="mb-0">{props.applicant.current_projects.length}</h3>
										<small>Current Projects</small>
									</div>
									<div className="col-12 col-lg-3 col-md-5">
										<div className="svg-wrapper mx-auto my-5 text-center">
											<svg height="35" width="200">
												<rect className="mx-auto my-auto shape" height="35" width="200" />
											</svg>
											<button className="text3 rr_link mx-auto my-auto" onClick={props.approveApp} value={props.id}>
												Approve
											</button>
										</div>
										<div className="svg-wrapper mx-auto my-5 text-center">
											<svg height="35" width="200">
												<rect className="mx-auto my-auto shape" height="35" width="200" />
											</svg>
											<button className="text3 rr_link mx-auto my-auto" onClick={props.rejectApp} value={props.id}>
												Reject
											</button>
										</div>
									</div>
								</Row>
							</Card.Body>
						</Card>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default AppPanel;
