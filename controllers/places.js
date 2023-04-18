const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
  res.send("Hello from places!");
});

// Export the router
module.exports = router;
