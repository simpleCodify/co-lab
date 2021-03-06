const Project = require("../../models/project");
const User = require("../../models/user");
const Application = require("../../models/application");

module.exports = {
	index,
	detail,
	create,
	update,
	appForPosition,
	appApprove,
	appReject
};

async function index(req, res) {
	const applications = await Application.find({});
	res.status(200).json(applications);
}

async function detail(req, res) {
	await Application.findById(req.params.id)
		.populate("User")
		.exec(function(err, application) {
			console.log("Inside the application detail controller: ", application.applicant);
			res.status(200).json(application);
		});
	// 	res.status(200).json(application);
}

async function appApprove(req, res) {
	let currentApp = await Application.findById(req.params.id);
	let applicant = await User.findByIdAndUpdate(currentApp.applicant, { $push: { current_projects: currentApp.target_project } }, { new: true, upsert: true }, function(err) {
		if (err) console.log(err);
	});
	let project = await Project.findByIdAndUpdate(
		currentApp.target_project,
		{
			$push: { project_members: currentApp.applicant }
		},
		{ new: true, upsert: true }
	);
	let position = await project.positions.id(currentApp.target_position);
	position.user = currentApp.applicant;
	position.status = "Filled";
	project.save(err => {
		console.log(err);
	});
	const updatedapp = await Application.findByIdAndUpdate(req.params.id, { status: "Approved" }, { new: true }, function(err, app) {
		if (err) console.log(err);
		return app;
	});
	res.status(200).json(updatedapp);
}

async function appReject(req, res) {
	const updatedapp = await Application.findByIdAndUpdate(req.params.id, { status: "Rejected" }, { new: true }, function(err, app) {
		if (err) console.log(err);
		return app;
	});
	res.status(200).json(updatedapp);
}

async function appForPosition(req, res) {
	const apps = await Application.find({ target_position: req.params.id, status: "Pending" }).populate("applicant");
	res.status(200).json(apps);
}

async function create(req, res) {
	// Destructuring allows to modify Object prior to Saving
	let newApplication = { ...req.body };
	newApplication.applicant = req.user._id;
	newApplication.target_project = req.body.applicationData.target_project;
	newApplication.target_position = req.body.applicationData.target_position;
	var query = {
			applicant: req.user._id,
			target_project: req.body.applicationData.target_project,
			target_position: req.body.applicationData.target_position
		},
		update = {
			applicant: req.user._id
		},
		options = {
			upsert: true,
			new: true,
			setDefaultsOnInsert: true
		};

	const application = await Application.findOneAndUpdate(query, update, options, function(err, application) {
		if (err) console.log(err);
	});
	// const application = await Application.create(newApplication);

	User.findByIdAndUpdate(
		req.user._id,
		{
			$push: { current_applications: application._id }
		},
		function(err) {
			if (err) {
				return res.send(err);
			}
			return;
		}
	);
	res.status(201).json(application);
}

async function update(req, res) {
	const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(200).json(updatedApplication);
}
