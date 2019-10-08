const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const Project = require("../../models/project");
const applicationsCtrl = require("../../controllers/api/applications");

/*---------- Public Routes ----------*/
router.get("/", applicationsCtrl.index);
router.get("/:id", applicationsCtrl.detail);

/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
router.post("/", checkAuth, applicationsCtrl.create);
router.put("/:id", applicationsCtrl.update);

/*---------- Helper Functions ----------*/
function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: "You are Not Authorized for this Action" });
}

module.exports = router;
