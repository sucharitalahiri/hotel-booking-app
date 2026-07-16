const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },

    checkIn: {
      type: Date,
      required: true,
    },

    checkOut: {
      type: Date,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
      default: 1,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

   paymentStatus: {
  type: String,
  enum: ["Pending", "Paid", "Cancelled", "Refunded"],
  default: "Pending",
},

    bookingStatus: {
      type: String,
      enum: ["Confirmed", "Cancelled"],
      default: "Confirmed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);