const express = require("express");
const router = express.Router();

const { select} = require("../controllers/select");// Route to handle form submission
router.get("/select", select);


module.exports = router;