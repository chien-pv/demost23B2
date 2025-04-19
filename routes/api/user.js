const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/api/user_controller");

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUserById)
router.post("/users", UserController.saveUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);
router.post("/login", UserController.login);

module.exports = router;
