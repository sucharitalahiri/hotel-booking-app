const express=require("express");

const router=express.Router();

const authMiddleware=require("../middleware/authMiddleware");
const customerMiddleware = require("../middleware/customerMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const{

createBooking,
  getMyBookings,
  getBookingById,
  cancelBooking,
  getAllBookings,

}=require("../controllers/bookingController");

router.post("/",authMiddleware, customerMiddleware, createBooking);

// router.post("/", authMiddleware, createBooking);

router.get("/my", authMiddleware, getMyBookings);

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAllBookings
);

router.get("/:id", authMiddleware, getBookingById);

router.put("/:id/cancel", authMiddleware, cancelBooking);

module.exports=router;