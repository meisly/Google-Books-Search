const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/saved"
router.route("/")
  .get(booksController.findAll)

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
