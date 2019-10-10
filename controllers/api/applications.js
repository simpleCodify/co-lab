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
	const application = await Application.findById(req.params.id);
	res.status(200).json(application);
}

async function appApprove(req, res) {
	// console.log("BODDDYYYYY: ", req.body);
	// let appData = { ...req.body };
	// console.log("Request Params ID:   ", req.params.id);
	// appData.status = "Approved";
	// console.log("APP DATA :   ", appData);
	const updatedapp = await Application.findByIdAndUpdate(req.params.id, { $set: { status: "Approved" } }, { new: true }, function(err) {
		if (err) console.log(err);
		return;
	});
	// console.log("Inside the Application AppApprove Controller:    ", req.body);
	// console.log("UPDATED APP:  ", updatedapp);
	res.status(200).json(updatedapp);
}

async function appReject(req, res) {}

async function appForPosition(req, res) {
	console.log("Inside Application Controller AppforPosition", req.params.id);
	const apps = await Application.find({ target_position: req.params.id, status: "Pending" });
	res.status(200).json(apps);
}

async function create(req, res) {
	// Destructuring allows to modify Object prior to Saving
	let newApplication = { ...req.body };
	newApplication.applicant = req.user._id;
	newApplication.target_project = req.body.applicationData.target_project;
	newApplication.target_position = req.body.applicationData.target_position;

	const application = await Application.create(newApplication);

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
