
const db = require("../models");
const bcrypt = require('bcrypt');
module.exports = {
    createdNewUser: function (req, res) {
        console.log(req.body)
        const userToCreate = {
            email: req.body.email,
        }
        bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
            console.log(req.body.password)
            if (err) throw new Error(err);
            console.log(hashedPassword)
        })
    },
    loginUser: function (req, res) { }
}