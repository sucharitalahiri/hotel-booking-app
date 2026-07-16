const User = require("../models/User");

const getAllCustomers = async (req, res) => {
  try {
    const users = await User.find({
      role: "customer",
    }).select("-password");

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllCustomers,
};