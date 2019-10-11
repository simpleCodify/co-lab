import React from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProjectListPage = props => {
	return (
		<>
			<h1>Hello Project List</h1>
			<Link to="/projects/add">
				<Button>Co-Lab</Button>
			</Link>
			<CardContainer projects={props.projects} />
		</>
	);
};

export default ProjectListPage;
