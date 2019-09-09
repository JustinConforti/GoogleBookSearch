const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/booksearch", bookRoutes);

module.exports = router;
