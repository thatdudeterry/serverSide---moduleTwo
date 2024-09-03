// import { successTemplate } from "../templates/templates";
import Pokemon from "../models/Pokemon.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const getAllPokemon = asyncHandler(async (req, res) => {
	const pokemon = await Pokemon.find();
	res.status(200).json({
		data: pokemon,
		success: true,
		message: `${req.method} - Pokemon request made`,
	});
});

export const getPokemonById = asyncHandler(async (req, res, next) => {
	const { id } = req.params;
	const { games } = req.query;
	let pokemon;
	if (games === "true") {
		pokemon = await Pokemon.findById(id).populate("games");
	} else {
		pokemon = await Pokemon.findById(id);
	}

	if (!pokemon) {
	}

	res.status(200).json({
		data: pokemon,
		success: true,
		message: `${req.method} - Pokemon request made`,
	});
});

export const createPokemon = asyncHandler(async (req, res, next) => {
	const { pokemon } = req.body;
	const pokemonData = await Pokemon.create(pokemon);
	res.status(200).json({
		data: pokemonData,
		success: true,
	});
});

export const updatePokemon = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const pokemon = await Pokemon.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
	});

	if (!pokemon) {
		return res.status(400).json({
			success: false,
		});
	}

	res.status(200).json({
		data: pokemon,
	});
});

export const deletePokemon = asyncHandler(async (req, res) => {});
