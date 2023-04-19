const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.render("places/index");
});

// Export the router
module.exports = router;
