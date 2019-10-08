import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import AddProjectPage from "../AddProjectPage/AddProjectPage";
import ProjectListPage from "../ProjectListPage/ProjectListPage";
import * as projectAPI from "../../utils/projectService";

import userService from "../../utils/userService.js";
import tokenService from "../../utils/tokenService";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: userService.getUser(),
			projects: []
		};
	}

	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
	};

	handleSearch = e => {};

	handleAddProject = async newProjectData => {
		const newProject = await projectAPI.create(newProjectData);
	};

	async componentDidMount() {
		const projects = await projectAPI.getAllProjects();
		this.setState({ projects });
	}

	render() {
		return (
			<div>
				<NavBar user={this.state.user} handleLogout={this.handleLogout} />
				<Switch>
					<Route exact path="/projects/" render={({ history }) => <ProjectListPage user={this.state.user} projects={this.state.projects} />} />
					<Route exact path="/projects/add" render={({ history }) => <AddProjectPage history={history} handleAddProject={this.handleAddProject} user={this.state.user} />} />
					<Route exact path="/" render={({ history }) => <HomePage history={history} user={this.state.user} />} />
					<Route exact path="/signup" render={({ history }) => <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />} />
					<Route exact path="/login" render={({ history }) => <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
