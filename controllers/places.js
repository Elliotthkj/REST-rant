const express = require("express");
const router = express.Router();

//new route
router.get("/new", (req, res) => {
  res.render("places/new");
});


// index route
router.get("/", (req, res) => {
  let places = [
    {
      name: "JINYA Ramen Bar",
      city: "Las Vegas",
      state: "NV",
      cuisines: "Japanese Ramen",
      pic: "/images/jrb_ramen_tonkotsu-black.jpg",
    },
    {
      name: "Express Hibachi",
      city: "Las Vegas",
      state: "NV",
      cuisines: "Chinese",
      pic: "/images/express_hibachi.jpg",
    },
  ];

  res.render("places/index", { places });
});


// Export the router
module.exports = router;
