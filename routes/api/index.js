const router = require("express").Router();

const locationRoutes = require("./locations");

router.use("/locations", locationRoutes);


module.exports = router;

