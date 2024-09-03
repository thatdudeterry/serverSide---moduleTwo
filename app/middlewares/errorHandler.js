import mongoose from "mongoose";
import ErrorResponse from "../utils/ErrorResponse";

const errorHandler = (err, req, res, next) => {
	console.log("Errors catching");
	console.log(err);
	let error = { ...err };

	if (err.code === 11000) {
		const message = `Pokemon with id of ${err.value} is taken.`;
		error = new ErrorResponse(message, 404);
	}

	if (err.name === "CastError") {
		const message = `Pokemon not found with id of ${err.value}.`;
		error = new ErrorResponse(message, 404);
	}

	if (err.name === "ValidtionError") {
		const message = Object.values(err.errors).map((val) => console.log(val));
		console.log(err.errors);
	}

	res.status(error.statusCode || 500).json({
		success: false,
		error: error.message || "Server Error",
	});
};

export default errorHandler;
