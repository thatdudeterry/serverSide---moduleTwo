const mongoose = require("mongoose");
const { type } = require("os");

const pokemonGamesSchema = new mongoose.Schema(
	{
		gameIndex: {
			type: Number,
			required: [true, `Game index is required`],
			maxlength: [5, "The max length for an index is 5 characters"],
		},

		games: {
			type: [String],
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
				"Black 2",
				"White 2",
				"X",
				"Y",
				"Omega-Ruby",
				"Alpha-Sapphire",
				"Sun",
				"Ultra Sun",
				"Moon",
				"Ultra Moon",
				"Let's Go Pikachu",
				"Let's Go Eevee",
				"Sword",
				"Shield",
				"The Isle or Armor",
				"The Crown Tundra",
				"Brilliant Diamond",
				"Shining Pearl",
				"Legends - Arceus",
				"Scarlet",
				"Violet",
				"The Teal Mask",
				"The Indigo Disk",
			],
		},
		pokemon: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Pokemon",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Games", pokemonGamesSchema);

// https://pokeapi.co/
