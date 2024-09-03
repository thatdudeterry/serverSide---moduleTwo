import express from "express";
// import mongoose from "mongoose";
import {
	createPokemon,
	deletePokemon,
	getAllPokemon,
	getPokemonById,
	updatePokemon,
} from "../controller/pokemonController.js";

const router = express.Router();

router.post("/", createPokemon);
router.delete("/:id", deletePokemon);
router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);
router.put("/:id", updatePokemon);

export default router;
