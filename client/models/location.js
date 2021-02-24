const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  items: [{ type: ObjectId, ref: "itemSchema" }],
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
