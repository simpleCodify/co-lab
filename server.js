const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const cors = require("cors");
const logger = require("morgan");

const PORT = 4000;

// Loading environment variables
require("dotenv").config();
// Database Connect
require("./config/database");

let usersRouter = require("./routes/api/users");
let projectsRouter = require("./routes/api/projects");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", usersRouter);
app.use("/api/projects", projectsRouter);

app.use(require("./config/auth"));

app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function() {
	console.log("Express Server is running on Port: " + PORT);
});
