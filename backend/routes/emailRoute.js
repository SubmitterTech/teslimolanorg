const express = require("express");
const router = express.Router();
const {sendEmailHandler} = require("../controllers/emailController");

router.post("/emailGonder",sendEmailHandler);

module.exports = router;