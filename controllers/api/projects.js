const Project = require("../../models/project");
const User = require("../../models/user");

module.exports = {
	index,
	detail,
	create,
	update
};

async function index(req, res) {
	const projects = await Project.find({});
	res.status(200).json(projects);
}

async function detail(req, res) {
	const project = await Project.findById(req.params.id);
	res.status(200).json(project);
}

async function create(req, res) {
	const project = await Project.create(req.body);
	console.log(project._id);
	console.log("user: ", req.user);
	// req.user.current_projects.push(project._id);
	User.findByIdAndUpdate(
		req.user._id,
		{
			$push: { current_projects: project._id }
		},
		function(err) {
			if (err) {
				return res.send(err);
			}
			return;
		}
	);
	console.log(req.user.current_projects);
	res.status(201).json(project);
}

async function update(req, res) {
	const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(200).json(updatedProject);
}
