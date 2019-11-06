const router = require("express").Router();
const bookRoutes = require("./books");
const savedRoutes = require("./saved");

// Book routes
router.use("/saved", savedRoutes);
router.use("/books", bookRoutes);

module.exports = router;
