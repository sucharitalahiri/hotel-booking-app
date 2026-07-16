const adminMiddleware = (req, res, next) => {
  try {
    if (req.user.role.toLowerCase() !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Authorization error.",
    });
  }
};

module.exports = adminMiddleware;