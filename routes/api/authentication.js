const router = require("express").Router();
const authController = require("../../controllers/authController");


router.route("/signup").post(authController.createdNewUser);
router.route("login").post(authController.loginUser);