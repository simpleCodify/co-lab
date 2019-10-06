import React, { Component } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";

const ProjectListPage = props => {
	return (
		<>
			<h1>Hello Project List</h1>
			<CardContainer projects={props.projects} />
		</>
	);
};

export default ProjectListPage;
