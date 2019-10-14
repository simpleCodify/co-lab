import React, { Component } from "react";

// Importing React-Router-Dom
import { Route, Switch } from "react-router-dom";

// Importing Components
import ProfileView from "../../components/ProfileView/ProfileView";
import NavBar from "../../components/NavBar/NavBar.jsx";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";

// Importing Pages
import ApplicationManager from "../ApplicationManager/ApplicationManager";
import AddProjectPage from "../AddProjectPage/AddProjectPage";
import ProjectListPage from "../ProjectListPage/ProjectListPage";
import HomePage from "../HomePage/HomePage.jsx";
import UserPortal from "../UserPortal/UserPortal";

// Importing Services API
import * as projectAPI from "../../utils/projectService";
import userService from "../../utils/userService.js";

// Importing Axios
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

	updateProjectState = async () => {
		const projects = await projectAPI.getAllProjects();
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
		const projects = await projectAPI.getAllProjects();
		this.setState({ projects: projects });

		const userid = this.state.user._id;
		Axios.get(`/api/users/${userid}`)
			.then(response => {
				this.setState({
					user: response.data
					// projects: projects
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="text-center">
				<NavBar user={this.state.user} handleLogout={this.handleLogout} />
				<hr className="col-md-8 mx-auto line-under" />

				<Switch>
					{/* Home Route */}
					<Route exact path="/" render={({ history }) => <HomePage history={history} user={this.state.user} />} />

					{/* Profile Routes */}
					<Route exact path="/profile/:id" render={({ history }) => <ProfileView history={history} user={this.state.user} />} />
					<Route path="/profile/:id/edit" render={({ history }) => <ProfileForm history={history} user={this.state.user} handleUpdateUser={this.handleUpdateUser} />} />

					{/* Alt Project Routes with History */}
					<Route exact path="/projects/" render={({ history }) => <ProjectListPage history={history} user={this.state.user} projects={this.state.projects} />} />
					<Route exact path="/projects/add" render={({ history }) => <AddProjectPage history={history} handleAddProject={this.handleAddProject} user={this.state.user} />} />
					<Route path="/projects/:id" component={ProjectDetails} user={this.state.user} handleAddApplication={this.handleAddApplication} />
					{/* <Route path="/projects/position/:id" component={PositionDetails} /> */}

					{/* Application Routes */}
					<Route path="/application/:id" component={ApplicationManager} history={this.history} />
					{/* <Route path="/application/:id" render={({ history }) => <ApplicationManager history={history} />} /> */}

					{/* User Signup / Login Routes */}
					<Route path="/portal" render={({ history }) => <UserPortal history={history} handleSignupOrLogin={this.handleSignupOrLogin} />} />
					{/* <Route path="/signup" render={({ history }) => <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />} />
					<Route path="/login" render={({ history }) => <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />} /> */}
				</Switch>
			</div>
		);
	}
}

export default App;
