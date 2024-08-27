const Pokemon = require("../models/Pokemon");
const mongoose = require("mongoose");

exports.createPokemon = async (req, res) => {
	try {
		const { pokemon } = req.body;
		const newPokemon = await Pokemon.create(pokemon);
		console.log("data >>>", newPokemon);
		res.status(201).json({
			data: newPokemon,
			success: true,
			message: `${req.method} - request to Pokemon endpoint`,
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

exports.deletePokemon = async (req, res) => {
	const { id } = req.params;
	try {
		const pokemon = await Pokemon.findByIdAndDelete(id, req.body);
		res.status(200).json({
			success: true,
			message: `${req.method} - request to Pokemon endpoint`,
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

exports.getAllPokemon = async (req, res) => {
	console.log(">>>", req.query);
	let queryString = JSON.stringify(req.query);

	queryString = queryString.replace(
		/\b(gt|gte|lt|lte)\b/g,
		(match) => `$${match}`
	);

	let query = Pokemon.find(JSON.parse(queryString));
	console.log(JSON.parse(queryString));

	if (req.query.select) {
		const fields = req.query.select.split(",").join(" ");
		query = Pokemon.find({}).select(fields);
	}

	if (req.query.sort) {
		const sortBy = req.query.sort.split(",").join(" ");
		query = Pokemon.find({}).sort(sortBy);
	}

	query = Pokemon.find({});
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 3;
	const skip = (page - 1) * limit;

	query.skip(skip).limit(limit);

	try {
		const pokemon = await query;
		res.status(200).json({
			data: pokemon,
			success: true,
			message: `${req.method} - request to Pokemon endpoint`,
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

exports.getPokemonById = async (req, res) => {
	const { id } = req.params;
	try {
		const pokemon = await Pokemon.findById(id, req.body);
		res.status(200).json({
			data: pokemon,
			success: true,
			message: `${req.method} - request to Pokemon endpoint`,
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

exports.updatePokemon = async (req, res) => {
	const { id } = req.params;
	try {
		const updatedPokemon = await Pokemon.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json({
			data: updatedPokemon,
			success: true,
			message: `${req.method} - request to Pokemon endpoint`,
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
