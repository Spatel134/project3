const mongoose = require("moongoose");

const Schema = moongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  addedBy: { type: String, required: true },
  date: { type: Date, default: Date.now },
  expiration: { type: Date, required: true },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
