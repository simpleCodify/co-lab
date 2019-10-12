import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProfileView = props => {
	let { url } = useRouteMatch();

	return (
		<>
			<div className="mx-5 my-5">
				<Link to={`${url}/edit`}>
					<Button className="btn-sm">Edit Profile</Button>
				</Link>
			</div>

			<div className="col-md-6 mx-auto">
				<h1>Profile Viewing</h1>
				<hr />

				<h4>{props.user.name}</h4>
				<h5>{props.user.email}</h5>

				<Card>
					<Card.Header>
						<Card.Title>{props.user.username}</Card.Title>
						<Card.Text>{props.user.name}</Card.Text>
						<Card.Subtitle>{props.user.role}</Card.Subtitle>
					</Card.Header>

					<Card.Body></Card.Body>

					<Card.Footer>
						<Card.Link href={props.user.github_link}>Github</Card.Link>
						<Card.Link href={props.user.linkedin_link}>LinkedIn</Card.Link>
					</Card.Footer>
				</Card>

				{/* <ul>{currProj}</ul> */}
			</div>
		</>
	);
};

export default ProfileView;
