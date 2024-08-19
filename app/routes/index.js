const express = require("express");
const router = express.Router();
const pokemonRoutes = require("./pokemonRoutes");
const pokemonGameRoutes = require("./pokemonGamesRoutes");

router.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: `${req.method} - Request made`,
	});
});

router.use("/pokemon", pokemonRoutes);
router.use("/games", pokemonGameRoutes);

module.exports = router;
