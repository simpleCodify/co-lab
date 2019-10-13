import React from "react";

// Importing React-Bootstrap Components
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const AppPanel = props => {
	return (
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
										<Badge className="mr-3" pill variant="dark">
											<a className="rr_link2" href={props.applicant.github_link}>
												github
											</a>
										</Badge>
										<Badge pill variant="info">
											<a className="rr_link2" href={props.applicant.linkedin_link}>
												LinkedIn
											</a>
										</Badge>
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
	);
};

export default AppPanel;
