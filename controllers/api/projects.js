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
	// Destructuring allows to modify Object prior to Saving
	let newProject = { ...req.body };
	newProject.project_owner = req.user;
	let tsize = newProject.project_team_size;
	for (let i = 0; i < tsize; i++) {
		if (i < 1) {
			newProject.positions.push({ user: req.user._id, role: req.user.role, status: "Filled" });
		} else {
			newProject.positions.push({ user: null });
		}
	}
	const project = await Project.create(newProject);

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
	res.status(201).json(project);
}

async function update(req, res) {
	const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(200).json(updatedProject);
}