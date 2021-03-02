const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, trim: true },
    password: { type: String, trim: true, required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
