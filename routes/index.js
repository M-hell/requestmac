const express = require("express");
const router = express.Router();
const checkmac = require("../controller/checkmac");
const addmac = require("../controller/addmac");

router.get("/checkmac/:address", checkmac);
router.post("/addmac", addmac);

module.exports = router;