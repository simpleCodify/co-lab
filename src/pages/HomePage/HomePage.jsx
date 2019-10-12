import React from "react";
import "./HomePage.css";

const HomePage = props => {
	let greet = props.user ? (
		<div>
			<h1>Welcome back !</h1>
			<h3>Browse some Projects!</h3>
			<p>{props.user.username}</p>
		</div>
	) : (
		<div>
			<h1>Welcome to Co-Lab !</h1>
			<h3>Please Signup or Login!</h3>
		</div>
	);

	return <div className="HomePage">{greet}</div>;
};

export default HomePage;
