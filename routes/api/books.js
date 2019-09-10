const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/booksearch"
router.route("/")
.post(booksController.create)
.get(booksController.findAll);
  

// Matches with "/api/booksearch/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;