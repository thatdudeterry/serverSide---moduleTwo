import express from "express";

import {
	createPokemonGame,
	deletePokemonGame,
	getAllPokemonGames,
	getPokemonGameById,
	updatePokemonGame,
} from "../controller/pokemonGameController.js";

const router = express.Router();

router.post("/", createPokemonGame);
router.delete("/:id", deletePokemonGame);
router.get("/", getAllPokemonGames);
router.get("/:id", getPokemonGameById);
router.put("/:id", updatePokemonGame);

export default router;
