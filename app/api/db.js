import Pokemon from "../models/Pokemon.js";

export const savePokemon = async (newPokemon) => {
	return await newPokemon.save();
};

export const findPokemon = async (object) => {
	return await Pokemon.find(object).exec();
};

export const updatePokemon = async (id, updateData) => {
	return await Pokemon.findByIdAndUpdate(id, updateData, {
		new: true,
		runValidators: true,
	}).exec();
};

export const deletePokemon = async (id) => {
	return await Pokemon.findByIdAndDelete(id).exec();
};

//  default { savePokemon, findPokemon, updatePokemon, deletePokemon };
