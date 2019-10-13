import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ColabButton from "../CoLabButton/CoLabButton";

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
					<Card className="app-panel align-middle">
						<Card.Body>
							<Row>
								<div className="col-12 col-lg-8 col-md-6 text-left">
									<h3 className="mb-0 text-truncated">{props.user.name}</h3>
									<p className="mb-0 text-truncated text-muted">"{props.user.username}"</p>
									<p className="mb-0 text-truncated lead">{props.user.role}</p>
									<p className="my-5">
										<Badge className="mr-3" pill variant="dark">
											<Link className="rr_link2" to={props.user.github_link}>
												github
											</Link>
										</Badge>
										<Badge pill variant="info">
											<Link className="rr_link2" to={props.user.linkedin_link}>
												LinkedIn
											</Link>
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
										<Link className="text rr_link mx-auto my-auto" to={`${url}/edit`}>
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
