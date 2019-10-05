const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema ({
    application_target_project: Schema.Types.ObjectId, ref = "Project",
    application_target_position: Schema.Types.ObjectId, ref = "Project",
    application_status: {
        type: String,
        default: 'Pending'
    },
    application_applicant: Schema.Types.ObjectId, ref = "User",
})

module.exports = mongoose.model("Application", applicationSchema);