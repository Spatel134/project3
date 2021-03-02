const { model } = require("mongoose");
const db = require("../models");
const bcrypt = require('bcrypt');
model.export = {
    createdNewUser: function (req, res) {
        const userToCreate = {
            email: req.body.email,
        }
        bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
            if (err) throw new Error(err);
            console.log(hashedPassword)
        })
    },
    loginUser: function (req, res) { }
}