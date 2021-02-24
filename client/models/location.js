const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
