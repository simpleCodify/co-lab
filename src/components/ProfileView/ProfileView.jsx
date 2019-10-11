import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProfileView = props => {
	let { url } = useRouteMatch();

	return (
		<>
			<div>
				<Link to={`${url}/edit`}>
					<Button className="btn-sm">Edit Profile</Button>
				</Link>
				<h1>Profile Viewing</h1>
				<hr />

				<h4>{props.user.name}</h4>
				<h5>{props.user.email}</h5>

				{/* <ul>{currProj}</ul> */}
			</div>
		</>
	);
};

export default ProfileView;
