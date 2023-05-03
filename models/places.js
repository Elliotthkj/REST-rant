const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "http://placekitten.com/350/350" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, "Surely not that old?!"],
    max: [new Date().getFullYear(), "This is the future!"],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

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
