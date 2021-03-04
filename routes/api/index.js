const router = require("express").Router();
const authentication = require("./authentication");
const locationRoutes = require("./locations");
const itemRoutes = require("./items");

router.use("/items", itemRoutes);
router.use("/admin/items", itemRoutes);
router.use("/locations", locationRoutes);
router.use("/admin/locations", locationRoutes);
router.use("/authentication", authentication);


module.exports = router;

