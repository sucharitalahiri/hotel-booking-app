const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
    },

    amenities: [
      {
        type: String,
      },
    ],

    gallery: [
      {
        type: String,
      },
    ],

    checkInTime: {
      type: String,
      default: "02:00 PM",
    },

    checkOutTime: {
      type: String,
      default: "11:00 AM",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hotel", hotelSchema);