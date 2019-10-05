const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema = new Schema({
    user: Schema.Types.ObjectId, ref="User",
    role: String,
    project: Schema.Types.ObjectId, ref="Project",
    status: {
        type: String,
        default: 'Open'
    }
});

const projectSchema = new Schema({
    project_name: String,
    project_owner: Schema.Types.ObjectId, ref="User",
	project_team_size: Number,
    positions: [positionSchema],
	project_members: [Schema.Types.ObjectId, (ref = "User")],
    project_applications: [Schema.Types.ObjectId, (ref = "Application")],
    
	project_github_link: String,
	project_slack_link: String,
    project_trello_link: String,
    project_other_links: [String]
});

module.exports = mongoose.model("Project", projectSchema);
