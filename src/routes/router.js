const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

// Rutas API
router.post("/api/products", controller.create);
router.get("/api/products", controller.find);

module.exports = router;
