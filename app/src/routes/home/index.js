const express = require("express");
const controller = require("./homeController");
const router = express.Router();

router.get("/", controller.output.getIndex );
router.get("/login", controller.output.getLogin)
router.get("/register", controller.output.getRegister);

router.post("/login", controller.process.postLogin)
router.post("/register", controller.process.postRegister);

module.exports = router;