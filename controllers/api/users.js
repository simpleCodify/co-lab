const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

module.exports = {
	signup,
	login,
	updateProfile,
	getuser
};

async function signup(req, res) {
	const user = new User(req.body);
	try {
		await user.save();
		const token = createJWT(user);
		res.json({ token });
	} catch (err) {
		// Probably a duplicate email
		res.status(400).json(err);
		console.log(err);
	}
}

async function updateProfile(req, res) {
	console.log("UPDATE WAS SENT A REQUEST");
	let data = { ...req.body };
	console.log("THIS IS THE REQ BODY:   ", data);
	console.log("WHERE IS THIS REQ PARAMS ID?   ", req.params.id);
	let currUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, updateduser) {
		if (err) console.log(err);
		return updateduser;
	});
	res.status(200).json(currUser);
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) return res.status(401).json({ err: "bad credentials" });
		user.comparePassword(req.body.pw, (err, isMatch) => {
			if (isMatch) {
				const token = createJWT(user);
				res.json({ token });
			} else {
				return res.status(401).json({ err: "bad credentials" });
			}
		});
	} catch (err) {
		return res.status(401).json(err);
	}
}

async function getuser(req, res) {
	const user = await User.findById(req.params.id);
	res.status(200).json(user);
}

function createJWT(user) {
	return jwt.sign({ user }, SECRET, { expiresIn: "1h" });
}
