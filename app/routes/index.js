import express from "express";
import pokemonRoutes from "./pokemonRoutes.js";
import pokemonGameRoutes from "./pokemonGamesRoutes.js";

// const userRoutes = require("./userRoutes");

const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: `${req.method} - Request made`,
	});
});

router.use("/pokemon", pokemonRoutes);
router.use("/games", pokemonGameRoutes);
// router.use("/users", userRoutes);

export default router;
