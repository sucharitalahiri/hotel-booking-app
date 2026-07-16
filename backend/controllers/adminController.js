const User = require("../models/User");
const Room = require("../models/Room");
const Booking = require("../models/Booking");

// Dashboard Statistics
const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "customer" });
    const totalRooms = await Room.countDocuments();
    const totalBookings = await Booking.countDocuments();

    const bookings = await Booking.find({
      paymentStatus: "Paid",
    });

    const revenue = bookings.reduce(
      (sum, booking) => sum + booking.totalAmount,
      0
    );

    res.status(200).json({
      success: true,
      dashboard: {
        totalUsers,
        totalRooms,
        totalBookings,
        revenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Customers
const getCustomers = async (req, res) => {
  try {
    const customers = await User.find(
      { role: "customer" },
      "-password"
    );

    res.status(200).json({
      success: true,
      count: customers.length,
      customers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "firstName lastName email phone")
      .populate("room", "roomNumber title roomType price");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
  getCustomers,
  getBookings,
};