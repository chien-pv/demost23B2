const express = require("express");
const HomeController = require("../controllers/home_controller");

const router = express.Router();
router.get("/", HomeController.index);
router.get("/about", HomeController.about);
router.get("/login", HomeController.login);
router.post("/login", HomeController.createSession);

module.exports = router;
