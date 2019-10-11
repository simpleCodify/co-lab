const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const usersCtrl = require("../../controllers/api/users");

/*---------- Public Routes ----------*/
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
router.put("/:id/update", usersCtrl.updateProfile);

/*---------- Helper Functions ----------*/
// function checkAuth(req, res, next) {
// 	if (req.user) return next();
// 	return res.status(401).json({ msg: "You are Not Authorized for this Action" });
// }

module.exports = router;
