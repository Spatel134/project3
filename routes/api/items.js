const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/items"
router
  .route("/")
  .get(itemsController.findAll)
  .post(itemsController.create);

// Matches with "/api/items/:id"
router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  // .delete(itemsController.remove);

router.route("/:id/addItems");
// .get(itemsController.findByIdWithItems)
// .post(itemsController.createItem);

//   router
//   .route ("/:id/removeItem/:itemId")
//   .delete(itemsController.deleteItem)

module.exports = router;
