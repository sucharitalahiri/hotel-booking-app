const Room = require("../models/Room");

// =========================
// Create Room
// =========================
const createRoom = async (req, res) => {
  try {
    const {
      roomNumber,
      title,
      roomType,
      description,
      price,
      capacity,
      amenities,
      images,
    } = req.body;

    const existingRoom = await Room.findOne({ roomNumber });

    if (existingRoom) {
      return res.status(400).json({
        success: false,
        message: "Room already exists",
      });
    }

    const room = await Room.create({
      roomNumber,
      title,
      roomType,
      description,
      price,
      capacity,
      amenities,
      images,
    });

    res.status(201).json({
      success: true,
      message: "Room created successfully",
      room,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// Get All Rooms
// =========================
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// Get Room By ID
// =========================
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// Update Room
// =========================
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room updated successfully",
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// Delete Room
// =========================
const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
};