const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const cors = require("cors");
const logger = require("morgan");

// Loading environment variables
require("dotenv").config();
// Database Connect
require("./config/database");

let usersRouter = require("./routes/api/users");
let projectsRouter = require("./routes/api/projects");
let applicationsRouter = require("./routes/api/applications");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", usersRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/applications", applicationsRouter);

app.use(require("./config/auth"));

app.get("/*", function(req, res) {
	// res.status(404).send("You are not Logged In!");
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
	console.log(`Express Running on port ${port}`);
});
