const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const projectsCtrl = require("../../controllers/api/projects");

/*---------- Public Routes ----------*/
router.get("/", projectsCtrl.index);

/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
router.get("/:id", checkAuth, projectsCtrl.detail);
router.get("/position/:id", checkAuth, projectsCtrl.posdetail);
router.post("/", checkAuth, projectsCtrl.create);
router.put("/:id", projectsCtrl.update);

/*---------- Helper Functions ----------*/
function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({ msg: "You are Not Authorized for this Action" });
}

module.exports = router;
