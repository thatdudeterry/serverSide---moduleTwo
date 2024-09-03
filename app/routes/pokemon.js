import express from "express";
import {
	savePokemon,
	findPokemon,
	updatePokemon,
	deletePokemon,
} from "../api/db.js";
import Pokemon from "../models/Pokemon.js";
import mongoose from "mongoose";
import { successTemplate, errorTemplate } from "../templates/templates.js";

const router = express.Router();

router.get("/", (req, res) => {
	console.log("Getting Pokemon");
	findPokemon({})
		.then((result) => {
			successTemplate(res, "Pokemon retrieved", result);
		})
		.catch((err) => {
			errorTemplate(res, err.message, err.status);
		});
});

router.post("/", (req, res) => {
	console.log("Saving Pokemon");
	const name = req.body.name;
	const type = req.body.type;
	const games = req.body.games;

	const newPokemon = new Pokemon({
		_id: new mongoose.Types.ObjectId(),
		name: name,
		type: type,
		games: games,
	});

	savePokemon(newPokemon)
		.then((result) => {
			successTemplate(res, "Pokemon saved", result);
		})
		.catch((err) => {
			errorTemplate(res, err.message, err.status);
		});
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { name, type, games } = req.body;

	updatePokemon(
		id,
		{ name, type, games },
		{ new: true, runValidators: true } // Return the updated document
	)
		.then((updatedPokemon) => {
			if (updatedPokemon) {
				successTemplate(res, "Pokemon updated", updatedPokemon);
			} else {
				errorTemplate(res, "Pokemon not found", 404);
			}
		})
		.catch((err) => {
			errorTemplate(res, err.message, err.status);
		});
});

router.delete("/:id", (req, res) => {
	console.log("Deleting Pokemon");
	const { id } = req.params;

	deletePokemon(id)
		.then((deletedPokemon) => {
			if (deletedPokemon) {
				successTemplate(res, "Pokemon deleted", deletedPokemon);
			} else {
				errorTemplate(res, "Pokemon not found", 404);
			}
		})
		.catch((err) => {
			errorTemplate(res, err.message, err.status);
		});
});

export default router;
