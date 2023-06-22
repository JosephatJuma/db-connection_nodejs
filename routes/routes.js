const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.get("/table",controller.createTable);
router.get("/table2",controller.createUfTable);


module.exports = router;