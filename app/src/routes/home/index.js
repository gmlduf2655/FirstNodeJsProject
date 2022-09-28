const express = require("express");
const controller = require("./homeController");
const router = express.Router();

router.get("/", controller.output.getIndex );

router.get("/login", controller.output.getLogin)

router.post("/login", controller.process.postLogin)

module.exports = router;