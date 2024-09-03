const Users = require("../models/Users");

exports.createUser = async (req, res) => {
	const { user } = req.body;
	try {
		const newUser = await User.create(user);
		console.log("data >>>", newUser);
		res.status(201).json({
			success: true,
			data: newUser,
			message: `${req.method} - request to User endpoint`,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			console.log("Error Validating!", error);
		} else {
			console.log(error);
			res.status(500).json(error);
		}
	}
};

exports.deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findByIdAndDelete(id, req.body);
		res.status(200).json({
			id,
			success: true,
			message: `${req.method} - request to User endpoint`,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			console.log("Error Validating!", error);
		} else {
			console.log(error);
			res.status(500).json(error);
		}
	}
};

exports.getAllUser = async (req, res) => {
	try {
		const user = await User.find({});
		res.status(200).json({
			data: user,
			success: true,
			message: `${req.method} - request to User endpoint`,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			console.log("Error Validating!", error);
		} else {
			console.log(error);
			res.status(500).json(error);
		}
	}
};

exports.getUserById = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findById(id, req.body);
		res.status(200).json({
			id,
			data: user,
			success: true,
			message: `${req.method} - request to User endpoint`,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			console.log("Error Validating!", error);
		} else {
			console.log(error);
			res.status(500).json(error);
		}
	}
};

exports.updateUser = async (req, res) => {
	const { id } = req.params;
	try {
		const updatedUser = await User.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json({
			data: updatedUser,
			success: true,
			message: `${req.method} - request to User endpoint`,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			console.log("Error Validating!", error);
		} else {
			console.log(error);
			res.status(500).json(error);
		}
	}
};
