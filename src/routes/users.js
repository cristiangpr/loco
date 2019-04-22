const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")


router.get("/users/sign_in", userController.signInForm);
router.post("/users/sign_in", userController.signIn);
 router.get("/users/sign_out", userController.signOut);
 router.get("/users/sign_up", userController.signUp);
 router.post("/users/create",  userController.create);

module.exports = router;
