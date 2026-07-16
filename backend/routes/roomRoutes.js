const express = require("express");
const router = express.Router();

const {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Public Routes
router.get("/", getAllRooms);
router.get("/:id", getRoomById);

// Admin Routes
router.post("/", authMiddleware, adminMiddleware, createRoom);
router.put("/:id", authMiddleware, adminMiddleware, updateRoom);
router.delete("/:id", authMiddleware, adminMiddleware, deleteRoom);

module.exports = router;