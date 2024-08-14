//? schemas in mongoose

const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
	// ^ validate to make sure data is formatted correct way
	name: String,
	age: Number,
});

module.exports = mongoose.model("Author", authorsSchema);
