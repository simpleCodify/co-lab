import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar.jsx";
import HomePage from "../HomePage/HomePage.jsx";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import AddProjectPage from "../AddProjectPage/AddProjectPage";
import ProjectListPage from "../ProjectListPage/ProjectListPage";

import ProfileView from "../../components/ProfileView/ProfileView";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import PositionDetails from "../../components/PositionDetails/PositionDetails";
import ApplicationManager from "../ApplicationManager/ApplicationManager";

import * as projectAPI from "../../utils/projectService";
import * as applicationAPI from "../../utils/applicationService";

import userService from "../../utils/userService.js";
import * as tokenService from "../../utils/tokenService";

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
					{/* Home Route */}
					<Route exact path="/" render={({ history }) => <HomePage history={history} user={this.state.user} />} />

					{/* Profile Routes */}
					<Route exact path="/profile/:id">
						<ProfileView user={this.state.user} />
					</Route>
					<Route path="/profile/:id/edit">
						<ProfileForm user={this.state.user} />
					</Route>

					{/* Project Routes
					<Route path="/projects/add">
						<AddProjectPage handleAddProject={this.handleAddProject} user={this.state.user} />
					</Route>
					<Route path="/projects/:id">
						<ProjectDetails user={this.state.user} handleAddApplication={this.handleAddApplication} />
					</Route>
					<Route exact path="/projects/">
						<ProjectListPage user={this.state.user} projects={this.state.projects} />
					</Route>
					<Route path="/projects/position/:id">
						<PositionDetails />
					</Route> */}

					{/* Alt Project Routes with History */}
					<Route exact path="/projects/" render={({ history }) => <ProjectListPage user={this.state.user} projects={this.state.projects} />} />
					<Route exact path="/projects/add" render={({ history }) => <AddProjectPage history={history} handleAddProject={this.handleAddProject} user={this.state.user} />} />
					<Route path="/projects/position/:id" component={PositionDetails} />
					<Route path="/projects/:id" component={ProjectDetails} user={this.state.user} handleAddApplication={this.handleAddApplication} />

					{/* Application Routes */}
					<Route path="/application/:id" component={ApplicationManager} />

					{/* User Signup / Login Routes */}
					<Route path="/signup" render={({ history }) => <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />} />
					<Route path="/login" render={({ history }) => <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />} />
				</Switch>
			</div>
		);
	}
}

export default App;
