// Get the environment variables when using .env
require("dotenv").config();

// Require needed modules.
const express = require("express");

// Initialize the app object.
const app = express();

// defines the view engine (JSX in this case)
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// places.js module
const placesRouter = require("./controllers/places");
app.use("/places", placesRouter);

// Create a homepage route.
app.get("/", function (req, res) {
  // This gets sent to the client
  // (your web browser most likely!)
  res.render("home");
});

//404 error handler
app.get("*", function (req, res) {
  res.send("<h1>404 Error</h1>");
});

// Listen for connections.
app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});
