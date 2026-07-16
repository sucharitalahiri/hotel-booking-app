const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const {
  getDashboard,
  getCustomers,
  getBookings,
} = require("../controllers/adminController");

router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  getDashboard
);

router.get(
  "/customers",
  authMiddleware,
  adminMiddleware,
  getCustomers
);

router.get(
  "/bookings",
  authMiddleware,
  adminMiddleware,
  getBookings
);

module.exports = router;