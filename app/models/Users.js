const mongoose = require("mongoose");
const { type } = require("os");

const UserSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
});
