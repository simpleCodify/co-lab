const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const projectsCtrl = require("../../controllers/api/projects");

/*---------- Public Routes ----------*/
router.get("/", projectsCtrl.index);
router.get("/:id", projectsCtrl.detail);

/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
router.post("/", checkAuth, projectsCtrl.create);
router.put("/:id", projectsCtrl.update);

/*---------- Helper Functions ----------*/
function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: "You are Not Authorized for this Action" });
}

module.exports = router;
