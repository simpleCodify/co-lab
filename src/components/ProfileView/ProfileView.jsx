import React from "react";

// Importing React-Router-Dom
import { Link, useRouteMatch } from "react-router-dom";

// Importing React-Bootstrap Components
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProfileView = props => {
	let { url } = useRouteMatch();
	return (
		<Container className="align-middle" style={{ height: "80vh" }}>
			<Row className="mt-5">
				<div className="col-8 mx-auto">
					<Card className="app-panel align-middle light-border">
						<Card.Body>
							<Row>
								<div className="col-12 col-lg-8 col-md-6 text-left">
									<h3 className="mb-0 text-truncated">{props.user.name}</h3>
									<p className="mb-0 text-truncated text-muted">"{props.user.username}"</p>
									<p className="mb-0 text-truncated lead">{props.user.role}</p>
									<p className="my-5">
										<Badge className="mr-3" pill variant="dark">
											<a className="rr_link2" href={props.user.github_link}>
												github
											</a>
										</Badge>
										<Badge pill variant="info">
											<a className="rr_link2" href={props.user.linkedin_link}>
												LinkedIn
											</a>
										</Badge>
									</p>
									<h3 className="mb-0">{props.user.current_projects.length}</h3>
									<small>Current Projects</small>
								</div>
								<div className="col-12 col-lg-3 col-md-5">
									<div className="svg-wrapper mx-auto my-5 text-center">
										<svg height="35" width="200">
											<rect className="mx-auto my-auto shape" height="35" width="200" />
										</svg>
										<Link className="text4 rr_link mx-auto my-auto" to={`${url}/edit`}>
											Edit
										</Link>
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

export default ProfileView;
