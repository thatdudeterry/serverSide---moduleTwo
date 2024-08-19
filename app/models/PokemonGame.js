const mongoose = require("mongoose");
// const { type } = require("os");

const pokemonGamesSchema = new mongoose.Schema(
	{
		gameIndex: {
			type: Number,
			required: [true, `Game index is required`],
			maxlength: [5, "The max length for an index is 5 characters"],
		},

		games: {
			type: [String],
			ref: "PokemonGame",
			enum: [
				"Red",
				"Yellow",
				"Blue",
				"Gold",
				"Silver",
				"Crystal",
				"Ruby",
				"Sapphire",
				"Emerald",
				"Fire Red",
				"Leaf Green",
				"Diamond",
				"Pearl",
				"Platinum",
				"Heart Gold",
				"Soul Silver",
				"Black",
				"White",
				"Colosseum",
				"XD",
			],
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
