const PokemonGame = require("../models/PokemonGame");

exports.createPokemonGame = async (req, res) => {
	const { pokemonGame } = req.body;
	try {
		const newPokemonGame = await PokemonGame.create(pokemonGame);
		console.log("data >>>", newPokemonGame);
		res.status(200).json({
			success: true,
			data: pokemonGame,
			message: `${req.method} - request to PokemonGame endpoint`,
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

exports.deletePokemonGame = async (req, res) => {
	const { id } = req.params;
	try {
		const deletePokemonGame = await PokemonGame.findByIdAndDelete(id);
		console.log("data >>>", deletePokemonGame);
		res.status(200).json({
			id,
			data: deletePokemonGame,
			success: true,
			message: `${req.method} - request to PokemonGame endpoint`,
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

exports.getAllPokemonGames = async (req, res) => {
	try {
		const getPokemonGames = await PokemonGame.find({});
		res.status(200).json({
			data: getPokemonGames,
			success: true,
			message: `${req.method} - request to PokemonGame endpoint`,
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

exports.getPokemonGameById = async (req, res) => {
	const { id } = req.params;
	try {
		const pokemonGame = await PokemonGame.findById(id, req.body, {
			new: true,
		});
		res.status(200).json({
			id,
			data: pokemonGame,
			success: true,
			message: `${req.method} - request to PokemonGame endpoint`,
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

exports.updatePokemonGame = async (req, res) => {
	const { id } = req.params;
	try {
		const pokemonGame = await PokemonGame.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json({
			data: pokemonGame,
			success: true,
			message: `${req.method} - request to PokemonGame endpoint`,
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
