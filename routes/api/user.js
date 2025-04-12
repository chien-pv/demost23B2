const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/api/user_controller");

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById)

module.exports = router;
