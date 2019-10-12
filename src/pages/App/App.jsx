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
import Axios from "axios";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: userService.getUser(),
			projects: []
		};

		this.handleUpdateUser = this.handleUpdateUser.bind(this);
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
		await projectAPI.create(newProjectData);
		let projects = await projectAPI.getAllProjects();
		this.setState({
			projects: projects
		});
	};

	handleUpdateUser = async () => {
		const userid = this.state.user._id;
		// console.log(this.state);
		// const { updateduser } = await Axios.get(`/api/users/${userid}`);
		// this.setState({ user: updateduser });
		Axios.get(`/api/users/${userid}`)
			.then(response => {
				console.log(JSON.stringify(this.state.user));
				console.log(JSON.stringify(response.data));
				this.setState({
					user: response.data
				});
			})
			.catch(err => {
				throw err;
			});
	};

	async componentDidMount() {
		console.log("AMAAAAAAAR");
		const userid = this.state.user._id;
		const projects = await projectAPI.getAllProjects();
		Axios.get(`/api/users/${userid}`)
			.then(response => {
				this.setState({
					user: response.data,
					projects: projects
				});
			})
			.catch(err => console.log(err));
		// this.setState({ projects: projects });
	}

	// async componentDidUpdate(prevProps) {
	// 	const userid = this.state.user._id;
	// 	const dbprojects = await projectAPI.getAllProjects();
	// 	let dbuser;

	// 	await Axios.get(`/api/users/${userid}`)
	// 		.then(response => {
	// 			dbuser = JSON.stringify(response.data);
	// 		})
	// 		.catch(err => console.log(err));
	// 	console.log("IS THIS DBUSER THINGY A STRING??? :: ", dbuser);
	// 	// let projects = JSON.stringify(this.state.projects);
	// 	let user = JSON.stringify(this.state.user);
	// 	// Typical usage (don't forget to compare props):
	// 	if (user !== dbuser || dbprojects !== this.state.projects) {
	// 		let newUser = JSON.parse(dbuser);
	// 		this.setState({ user: newUser, projects: dbprojects });
	// 	}
	// }

	render() {
		return (
			<div className="text-center">
				<NavBar user={this.state.user} handleLogout={this.handleLogout} />
				<Switch>
					{/* Home Route */}
					<Route exact path="/" render={({ history }) => <HomePage history={history} user={this.state.user} />} />

					{/* Profile Routes */}
					<Route exact path="/profile/:id">
						<ProfileView user={this.state.user} />
					</Route>

					<Route path="/profile/:id/edit" render={({ history }) => <ProfileForm history={history} user={this.state.user} handleUpdateUser={this.handleUpdateUser} />} />

					{/* <Route path="/profile/:id/edit">
						<ProfileForm user={this.state.user} />
					</Route> */}

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
					<Route exact path="/projects/" render={({ history }) => <ProjectListPage history={history} user={this.state.user} projects={this.state.projects} />} />
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
