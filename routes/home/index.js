const express = require("express");
const controller = require("../../controllers/home/homeController");
const router = express.Router();

router.get("/", controller.getIndex );

router.get("/login", controller.getLogin)

module.exports = router;