const Project = require("../../models/project");

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
	res.status(201).json(project);
}

// async function create(req, res) {
// 	console.log("user: ", req.user);
// 	try {
// 		await Project.create(req.body);
// 		res.status(201).json(project);
// 	} catch (err) {
// 		res.json({ err });
// 	}
// }

async function update(req, res) {
	const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(200).json(updatedProject);
}
