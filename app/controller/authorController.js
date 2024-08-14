const Authors = require("../models/Authors");

exports.createAuthor = (req, res) => {
	const data = req.body;
	console.log("data >>>", data);
	res.status(200).json({
		success: true,
		message: `${req.method} - request to Author endpoint`,
	});
};

exports.deleteAuthor = (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		success: true,
		message: `${req.method} - request to Author endpoint`,
	});
};

exports.getAllAuthors = (req, res) => {
	res.status(200).json({
		success: true,
		message: `${req.method} - request to Author endpoint`,
	});
};

exports.getAuthorById = (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		success: true,
		message: `${req.method} - request to Author endpoint`,
	});
};

exports.updateAuthor = (req, res) => {
	const { id } = req.params;
	res.status(200).json({
		id,
		success: true,
		message: `${req.method} - request to Author endpoint`,
	});
};

// ^ Best Practice IMO
// ? the previous functions can be written as
//
//      exports.createAuthor = (request, response) => {
// 	const { id } = request.params;
// 	response.status(200).json({
// 		id,
// 		success: true,
// 		message: `${request.method} - request to Author endpoint`,
// 	});
// };
//
// ? this eliminates the need to write module.exports = { createAuthor, etc, } to help ensure that exports are not missed. otherwise export as below
//	 module.exports = {
//	 	createAuthor,
//	 	deleteAuthor,
//	 	getAllAuthors,
//	 	getAuthorById,
//	 	updateAuthor,
// 	};

//
// ?
