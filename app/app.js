import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import pokemon from "./routes/pokemon.js";
import routeHandler from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());
app.use(cors());
app.use("/api/v1", routeHandler);

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origins", "*");
	res.header(
		"Access-Control-Allow-Header",
		"Origin, X-Requested-With, Content-Type,Accept, Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "POST,PUT,GET,PATCH,DELETE");
	}
	next();
});

app.get("/", (req, res) => {
	res.status(200).json({
		message: "API is running",
		success: true,
	});
});

app.use("/pokemon", pokemon);

app.get("/", (req, res, next) => {
	res.status(201).json({
		message: "Service is up",
		method: req.method,
	});
});

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
			status: error.status,
			method: req.method,
		},
	});
});

mongoose.connect(process.env.MONGODB_URI, {
	// useNewUrlParser: true,
	// useUnifiedTopology: true,
});
export default app;
