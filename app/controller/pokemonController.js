const Pokemon = require("../models/Pokemon");

exports.createPokemon = async (req, res) => {
	const { pokemon } = req.body;
	try {
		const newPokemon = await Pokemon.create(pokemon);
		console.log("data >>>", newPokemon);
		res.status(201).json({
			success: true,
			data: newPokemon,
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
			id,
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
	try {
		const pokemon = await Pokemon.find({});
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
			id,
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
