const Hotel = require("../models/Hotel");

// Get hotel details
const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findOne();

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found"
      });
    }

    res.status(200).json({
      success: true,
      hotel
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Create hotel (Admin)
const createHotel = async (req, res) => {
  try {
    const existingHotel = await Hotel.findOne();

    if (existingHotel) {
      return res.status(400).json({
        success: false,
        message: "Hotel already exists",
      });
    }

    const hotel = await Hotel.create(req.body);

    res.status(201).json({
      success: true,
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update hotel
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getHotel,
  createHotel,
  updateHotel,
};