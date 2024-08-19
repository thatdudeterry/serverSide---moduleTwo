const router = require("express").Router();
const {
	createPokemonGame,
	deletePokemonGame,
	getAllPokemonGames,
	getPokemonGameById,
	updatePokemonGame,
} = require("../controller/pokemonController");

router.post("/", createPokemonGame);
router.delete("/:id", deletePokemonGame);
router.get("/", getAllPokemonGames);
router.get("/:id", getPokemonGameById);
router.put("/:id", updatePokemonGame);

module.exports = router;
