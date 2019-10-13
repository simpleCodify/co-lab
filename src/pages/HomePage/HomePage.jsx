import React from "react";
import ColabButton from "../../components/CoLabButton/CoLabButton.jsx";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = props => {
	return (
		<main className="wrapper">
			<section className="section parallax bg1">
				<div className="text-center font-black">
					<h1>Welcome to co-Lab</h1>
					<h3>
						Providing a Platform for <span className="font-gradient">Collaborations </span> for Users around the world
					</h3>
				</div>
			</section>

			<section className="section1 static">
				<div className="col-sm-3 text-center">
					<h1 className="font-gradient">Skillset</h1>
				</div>

				<div className="col-sm-8 text-center">
					<h3 style={{ opacity: 0.9 }}>Are you a CSS Maestro? An HTML God? </h3>
					<h3 style={{ opacity: 0.7 }}> But a rock when it comes to Node.js, Express.js or the Plethora of Database options?</h3>
					<h3 style={{ opacity: 0.9 }}>Looking for someone you can "collaborate" with...?</h3>
				</div>
			</section>
			<section className="section1 parallax" />

			<section className="section1 static">
				<div className="col-sm-8 text-center">
					<h3 className="text-center">co-Lab is Here to help with just that!</h3>
					<h3 className="text-center">Our Platform is designed to help users find others with a different skill set.</h3>
					<h3 className="text-center">Improve your Portfolio or Resume and Level Up!</h3>
				</div>
				<div className="col-sm-3 text-center">
					<h1 className="font-gradient">Our Platform</h1>
				</div>
			</section>
			<section className="section3 parallax bg2" />

			<section className="section1 parallax" />

			<section className="section3 parallax bg3" />

			<section className="section1 static">
				<div className="col-sm-3 text-center">
					<h1 className="font-gradient">How it works</h1>
				</div>
				<div className="col-sm-8 text-center">
					<h3 className="text-center" style={{ opacity: 0.9 }}>
						Browse through the Projects that users have made
					</h3>
					<h3 className="text-center" style={{ opacity: 0.9 }}>
						Start your own Project, and guide your dreams to fruition!
					</h3>
					<h3 className="text-center" style={{ opacity: 0.9 }}>
						No need to put effort in searching for others, They will come to You!
					</h3>
				</div>
			</section>
			<section className="section parallax" />
			<section className="section2 parallax bg1" />

			<section className="section1 parallax">
				<div className="col-sm-8 text-center font-black">
					<h3 className="text-center" style={{ opacity: 0.9 }}>
						Let's help you get <span className="font-gradient">Started</span> on your Journey!
					</h3>
					<ColabButton btnname={"co-Lab"} linkto={"/projects/add"} />
				</div>
			</section>
		</main>
	);
};

export default HomePage;
