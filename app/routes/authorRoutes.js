// ^ /routes/authorRoutes

const router = require("express").Router();

const {
	// ? these are considered middleware functions
	createAuthor,
	deleteAuthor,
	getAllAuthors,
	getAuthorById,
	updateAuthor,
} = require("../controller/authorController");

router.post("/", createAuthor);
router.delete("/:id", deleteAuthor);
router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);
router.put("/:id", updateAuthor);

module.exports = router;
