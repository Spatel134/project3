const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String },
  category: { type: String },
  addedBy: { type: String },
  date: { type: Date, default: Date.now },
  expiration: { type: Date },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
