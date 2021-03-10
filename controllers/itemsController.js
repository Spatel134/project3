const db = require("../models");
// Defining methods for the locationsController
module.exports = {
  findAll: function (req, res) {
    db.Item.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Item.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const id = req.body.selectedLocation;
    const item = {
      name: req.body.name,
      category: req.body.category,
      addedBy: req.body.addedBy,
      expiration: req.body.expiration,
    };

    db.Item.create(item)

      .then((dbModel) => {
        db.Location.findOneAndUpdate(
          { _id: id },
          { $push: { items: dbModel._id } },
          { new: true }
        ).then((response) => {
          res.json(response);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  // *************************************
  // createNew method calls create method
  // *************************************
  createNew: (req, res) => {
    const locationId = req.body.locationId;
    const newItem = req.body.item;
    db.Item.create(newItem)
      .then((itemData) => {
        return db.Location.findOneAndUpdate(
          { _id: locationId },
          { $push: { items: itemData._id } },
          { new: true }
        ).populate("items");
      })
      .then((updatedLocation) => {
        res.json(updatedLocation);
      })
      .catch((err) => res.status(422).json(err.message));
  },
  update: function (req, res) {
    db.Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Item.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //   deleteItem: function (req, res) {
  //     db.Item.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
