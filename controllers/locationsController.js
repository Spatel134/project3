const db = require("../models");
console.log("Hello!");
// Defining methods for the locationsController
module.exports = {
  findAll: function (req, res) {

    db.Location.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Location.findOne({ _id: req.params.id })
      .populate("items")
      .then(info => {
        res.json(info);
      }).catch(err => {
        console.log(err)
      })


  },
  create: function (req, res) {
    db.Location.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Location.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Location.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //   deleteItem: function (req, res) {
  //     db.Location.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // create: (req, res) => {
  //   const locationId = req.body.locationId;
  //   const newItem = req.body.item;
  //   db.Item.create(newItem)
  //     .then((itemData) => {
  //       return db.Location.findOneAndUpdate(
  //         { _id: locationId },
  //         { $push: { items: itemData._id } },
  //         { new: true }
  //       ).populate("items");
  //     })
  //     .then((updatedLocation) => {
  //       res.json(updatedLocation);
  //     })
  //     .catch((err) => res.status(422).json(err.message));
  // },
};
