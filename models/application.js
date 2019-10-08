const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
	target_project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
	target_position: { type: mongoose.Schema.Types.ObjectId, ref: "Position" },
	status: {
		type: String,
		default: "Pending"
	},
	applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Application", applicationSchema);
