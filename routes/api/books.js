const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/booksearch"
router.route("/")
.get(bookController.searchAll)
.post(booksController.create);
  

// Matches with "/api/booksearch/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;