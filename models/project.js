const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
	role: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
	status: {
		type: String,
		default: "Open"
	}
});

const projectSchema = new mongoose.Schema({
	project_name: String,
	project_owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	project_description: String,
	project_team_size: Number,
	positions: [positionSchema],
	project_members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	project_applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],

	project_github_link: String,
	project_slack_link: String,
	project_trello_link: String,
	project_other_links: [String]
});

module.exports = mongoose.model("Project", projectSchema);
