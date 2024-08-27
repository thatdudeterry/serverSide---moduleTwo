const mongoose = require("mongoose");
const { type } = require("os");

const pokemonGamesSchema = new mongoose.Schema(
	{
		gameIndex: {
			type: Number,
			name: String,
			required: [true, `Game index is required`],
			maxlength: [5, "The max length for an index is 5 characters"],
		},

		pokemon: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Pokemon",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Games", pokemonGamesSchema);

// https://pokeapi.co/
