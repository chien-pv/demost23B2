const express = require("express");
const ProductController = require("../controllers/product_controler");

const router = express.Router();

function checkAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

router.get("/", checkAuth, ProductController.index);
router.get("/new", checkAuth, ProductController.new);
router.post("/create", checkAuth, ProductController.create);

router.get("/delete/:id", checkAuth, ProductController.delete);

module.exports = router;
