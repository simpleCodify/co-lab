import React from "react";
import CardContainer from "../CardContainer/CardContainer";

const ProjectListPage = props => {
	return (
		<>
			<h1>Hello Project List</h1>
			<CardContainer projects={props.projects} />
		</>
	);
};

export default ProjectListPage;
