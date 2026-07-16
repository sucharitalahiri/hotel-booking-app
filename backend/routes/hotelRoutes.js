const express = require("express");

const router = express.Router();

const {
  getHotel,
  createHotel,
  updateHotel,
} = require("../controllers/hotelController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Public
router.get("/", getHotel);

// Admin
router.post("/", authMiddleware, adminMiddleware, createHotel);

router.put("/:id", authMiddleware, adminMiddleware, updateHotel);

module.exports = router;