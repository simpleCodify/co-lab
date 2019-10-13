import React from "react";

// Importing React-Router-Dom
import { Link } from "react-router-dom";

// Importing Components
import CardContainer from "../../components/CardContainer/CardContainer";

const ProjectListPage = props => {
	return (
		<>
			<div className="svg-wrapper mx-auto my-5 text-center">
				<svg height="35" width="200">
					<rect className="mx-auto my-auto shape" height="35" width="200" />
				</svg>
				<Link className="text rr_link mx-auto my-auto" to="/projects/add">
					co-Lab
				</Link>
			</div>
			<CardContainer projects={props.projects} />
		</>
	);
};

export default ProjectListPage;
