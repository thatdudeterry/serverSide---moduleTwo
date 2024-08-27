const mongoose = require("mongoose");
const { type } = require("os");

const pokemonSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, `Name is required`],
			unique: true,
			trim: true,
			maxlength: [25, `Name cannot exceed 25 characters`],
		},

		type: {
			type: String,
			trim: true,
			enum: [
				"Normal",
				"Fire",
				"Water",
				"Electtric",
				"Grass",
				"Ice",
				"Fighting",
				"Poison",
				"Ground",
				"Flying",
				"Pshychic",
				"Bug",
				"Rock",
				"Ghost",
				"Dragon",
				"Dark",
				"Steel",
				"Fairy",
				"Other",
			],

			maxlength: [25, `The max length for a name is 25 characters`],
		},

		height: {
			type: Number,
			min: [0, `Value must be greater than 0`],
			max: [1000, `Value must be less than 1000`],
		},
		weight: {
			type: Number,
			min: [0, `Value must be greater than 0`],
			max: [1000, `Value must be less than 1000`],
		},

		abilities: {
			type: String,
			name: String,
			trim: true,
			maxlength: [25, `The max length for a ability is 25 characters`],
		},

		moves: {
			type: String,
			name: String,
			levelLearned: Number,
			trim: true,
			maxlength: [25, `The max length for a move is 25 characters`],
		},

		games: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "PokemonGame",
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Pokemon", pokemonSchema);

// https://pokeapi.co/
