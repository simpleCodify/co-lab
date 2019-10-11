const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DATABASE_URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
	console.log("MongoDB Database connection established!");
});
