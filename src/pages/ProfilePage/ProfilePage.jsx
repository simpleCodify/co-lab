import React, { Component } from "react";
import { Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ProfileView from "../../components/ProfileView/ProfileView";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import Button from "react-bootstrap/Button";

const ProfilePage = props => {
	let { url } = useRouteMatch();
	return (
		<div>
			<h1>Welcome {props.user.name}</h1>
			<p>URL = {url}</p>
			<p>Path = </p>
			<hr />
			<Link to={`${url}/edit`}>
				<Button>Edit Profile</Button>
			</Link>

			<Switch>
				<Route exact path={`${url}`}>
					<ProfileView user={props.user} />
				</Route>
				<Route path={`${url}/edit`}>
					<ProfileForm user={props.user} />
				</Route>
			</Switch>
		</div>
	);
};

export default ProfilePage;
