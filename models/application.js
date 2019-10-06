const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
	application_target_project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
	application_target_position: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
	application_status: {
		type: String,
		default: "Pending"
	},
	application_applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Application", applicationSchema);
