import React, { Component } from "react";
import "./AddProjectPage";
import Button from "react-bootstrap/Button";

class AddProjectPage extends Component {
	state = {
		invalidForm: true,
		formData: {
			project_name: "",
			project_team_size: "1",
			project_description: "",
			project_owner: ""
		}
	};

	formRef = React.createRef();

	handleSubmit = async e => {
		e.preventDefault();
		try {
			await this.props.handleAddProject(this.state.formData);
			this.props.history.push("/");
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = e => {
		const formData = { ...this.state.formData, [e.target.name]: e.target.value };
		this.setState({
			formData,
			invalidForm: !this.formRef.current.checkValidity()
		});
	};

	render() {
		return (
			<>
				<h1>Add a Project</h1>
				<form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Project Name (required) </label>
						<input className="form-control" name="project_name" value={this.state.formData.project_name} onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label>Project Description</label>
						<input className="form-control" name="project_description" value={this.state.formData.project_description} onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label>Project Team Size</label>
						<input className="form-control" name="project_team_size" value={this.state.formData.project_team_size} onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label>Project Owner</label>
						<input className="form-control" name="project_owner" value={this.state.formData.project_owner} onChange={this.handleChange} required />
					</div>
					<Button type="submit" disabled={this.state.invalidForm}>
						Create Project
					</Button>
				</form>
			</>
		);
	}
}

export default AddProjectPage;
