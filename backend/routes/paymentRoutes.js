const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { makePayment } = require("../controllers/paymentController");

router.post("/", authMiddleware, makePayment);

module.exports = router;