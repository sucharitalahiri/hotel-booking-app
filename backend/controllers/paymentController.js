const Booking = require("../models/Booking");

const makePayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.paymentStatus === "Paid") {
      return res.status(400).json({
        success: false,
        message: "Payment already completed",
      });
    }

    booking.paymentStatus = "Paid";
    await booking.save();

    res.status(200).json({
      success: true,
      message: "Payment Successful",
      paymentId: "PAY_" + Date.now(),
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  makePayment,
};