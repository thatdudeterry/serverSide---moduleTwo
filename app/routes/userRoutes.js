// const express = require("express");
// const { saveUser, findUser } = require("../db/db");
// const router = express.Router();
// const Users = require("../models/Users");
// const mongoose = require("mongoose");
// const { successTemplate, errorTemplate } = require("../templates/templates");

// router.get("/", (req, res, next) => {
// 	console.log("Getting User");
// 	findUser({})
// 		.then((result) => {
// 			successTemplate(res, "User found", result);
// 		})
// 		.catch((err) => {
// 			errorTemplate(res, err.message, err.status);
// 		});
// });

// router.post("/", (req, res) => {
// 	console.log("Saving User");
// 	const fname = req.body.fname;
// 	const lname = req.body.lname;
// 	const email = req.body.email;
// 	const age = req.body.age;
// 	const address = req.body.address;
// 	const city = req.body.city;
// 	const state = req.body.state;

// 	const newUser = new User({
// 		_id: new mongoose.Types.ObjectId(),
// 		fname,
// 		lname,
// 		email,
// 		age,
// 		address,
// 		city,
// 		state,
// 	});

// 	saveUser(newUser)
// 		.then((result) => {
// 			successTemplate(res, "User created", result);
// 		})
// 		.catch((error) => {
// 			errorTemplate(res, error.message, error.status);
// 		});
// });

// router.put("/:id", (req, res) => {
// 	const { id } = req.params;
// 	const { fname, lname, email, age, address, city, state } = req.body;

// 	User.findByIdAndUpdate(
// 		id,
// 		{ fname, lname, email, age, address, city, state },
// 		{ new: true, runValidators: true }
// 	)
// 		.then((updatedUser) => {
// 			if (!updatedUser) {
// 				return errorTemplate(res, "User not found", 404);
// 			}
// 			successTemplate(res, "User updated successfully", updatedUser);
// 		})
// 		.catch((error) => {
// 			errorTemplate(res, error.message, error.status);
// 		});
// });

// router.delete("/:id", (req, res) => {
// 	const { id } = req.params;

// 	User.findByIdAndDelete(id)
// 		.then((deletedUser) => {
// 			if (!deletedUser) {
// 				return errorTemplate(res, "User not found", 404);
// 			}
// 			successTemplate(res, "User deleted successfully", deletedUser);
// 		})
// 		.catch((error) => {
// 			errorTemplate(res, error.message, error.status);
// 		});
// });
// module.exports = router;
