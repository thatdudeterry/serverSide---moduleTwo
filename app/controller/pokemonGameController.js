import PokemonGame from "../models/PokemonGame.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { match } from "assert";

// Create Game
export const createPokemonGame = asyncHandler(async (req, res) => {
	const { game } = req.body;
	const edition = await PokemonGame.findById(game.pokemon);
	game.pokemon = edition;
	const gameData = new PokemonGame(pokemonGame);

	edition.games.push(gameData._id);

	const queries = [gameData.save(), edition.save()];
	await Promise.all(queries);

	const newPokemonGame = await PokemonGame.create({
		gameIndex,
		games,
		pokemon,
	});
	console.log("data >>>", newPokemonGame);
	res.status(200).json({
		success: true,
		data: newPokemonGame,
		message: `${req.method} - request to PokemonGame endpoint`,
	});
});

// Delete Game
export const deletePokemonGame = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const deletePokemonGame = await PokemonGame.findByIdAndDelete(id);
	console.log("data >>>", deletePokemonGame);
	res.status(200).json({
		id,
		data: deletePokemonGame,
		success: true,
		message: `${req.method} - request to PokemonGame endpoint`,
	});
});

// Get All Games
export const getAllPokemonGames = asyncHandler(async (req, res) => {
	let query;
	const reqQuery = { ...req.query };
	const removeFields = ["select"];

	removeFields.array.forEach((params) => {
		delete reqQuery[params];
	});

	let queryString = JSON.stringify(reqQuery);
	queryString = queryString.replace(/\b(gte|gt|lte|lt|in)\b/, (match) => {
		return `$${match}`;
	});
	console.log(queryString);

	query = await PokemonGame.find(JSON.parse(queryString)).select(fields);

	if (req.query.select) {
		const fields = req.query.select.split(",").join(" ");
		console.log(fields);
		query.select(fields);
	}

	const getPokemonGames = await query;
	res.status(200).json({
		data: pokemonGames,
		success: true,
		message: `${req.method} - request to PokemonGame endpoint`,
	});
});

// Get by ID
export const getPokemonGameById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const pokemonGame = await PokemonGame.findById(id, req.body, {
		new: true,
	});
	res.status(200).json({
		id,
		data: pokemonGame,
		success: true,
		message: `${req.method} - request to PokemonGame endpoint`,
	});
});

// Update Game
export const updatePokemonGame = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const pokemonGame = await PokemonGame.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	res.status(200).json({
		data: pokemonGame,
		success: true,
		message: `${req.method} - request to PokemonGame endpoint`,
	});
});
