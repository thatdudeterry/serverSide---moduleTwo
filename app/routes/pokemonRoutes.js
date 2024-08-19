const router = require("express").Router();
const {
	createPokemon,
	deletePokemon,
	getAllPokemon,
	getPokemonById,
	updatePokemon,
} = require("../controller/pokemonController");

router.post("/", createPokemon);
router.delete("/:id", deletePokemon);
router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);
router.put("/:id", updatePokemon);

module.exports = router;
