const Project = require("../../models/project");
const User = require("../../models/user");
const Application = require("../../models/application");

module.exports = {
	index,
	detail,
	create,
	update
};

async function index(req, res) {
	const applications = await Application.find({});
	res.status(200).json(applications);
}

async function detail(req, res) {
	const application = await Application.findById(req.params.id);
	res.status(200).json(application);
}

async function create(req, res) {
	// Destructuring allows to modify Object prior to Saving
	let newApplication = { ...req.body };

	// newApplication.applicant = req.user;
	// newApplication.target_project = req.params.id;
	// newApplication.target_position = req.body.position._id;

	newApplication.applicant = req.user;
	newApplication.target_project = "req.params.id";
	newApplication.target_position = "req.body.position._id";

	const application = await Application.create(newApplication);

	// User.findByIdAndUpdate(
	// 	req.user._id,
	// 	{
	// 		$push: { current_applications: application._id }
	// 	},
	// 	function(err) {
	// 		if (err) {
	// 			return res.send(err);
	// 		}
	// 		return;
	// 	}
	// );
	res.status(201).json(application);
}

async function update(req, res) {
	const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(200).json(updatedApplication);
}
