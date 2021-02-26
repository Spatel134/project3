const router = require("express").Router();

const locationRoutes = require("./locations");
const itemRoutes = require("./items");

router.use("/items", itemRoutes);
router.use("/locations", locationRoutes);


module.exports = router;

