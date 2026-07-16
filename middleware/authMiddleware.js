const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function protect(req, res, next) {
  const authHeader = req.headers.authorization;

  // Check existance and format of auth header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      error: "Not authorized.",
    });
  }

  // Extract JWT token
  const token = authHeader.split(" ")[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save decoded user
    req.user = await User.findById(decoded.userId).select("-password");

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      error: "Not authorized.",
    });
  }
}

module.exports = protect;
