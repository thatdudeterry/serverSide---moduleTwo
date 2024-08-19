const express = require("express");
const routeHandler = require("./routes");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.status(200).json({
		message: "API is running",
		success: true,
	});
});

app.use("/api/v1", routeHandler);

module.exports = app;
