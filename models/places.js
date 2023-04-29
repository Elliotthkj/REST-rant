const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

module.exports = mongoose.model("Place", placeSchema);

// module.exports = [
//     {
//       name: "JINYA Ramen Bar", // index 0
//       city: "Las Vegas",
//       state: "NV",
//       cuisines: "Japanese Ramen",
//       pic: "/images/jrb_ramen_tonkotsu-black.jpg",
//     },
//     {
//       name: "Express Hibachi", // index 1
//       city: "Las Vegas",
//       state: "NV",
//       cuisines: "Chinese",
//       pic: "/images/express_hibachi.jpg",
//     },
//   ];
