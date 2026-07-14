const bcrypt = require("bcryptjs");
const User = require("../models/User");

// Register user
async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        error: "Please provide a username, email and password.",
      });
    }

    // Check if username is already in use
    const existingUsername = await User.findOne({
      username,
    });

    if (existingUsername) {
      return res.status(409).json({
        success: false,
        error: "Username already exists.",
      });
    }

    // Check if email is already in use
    const existingEmail = await User.findOne({
      email,
    });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        error: "Email already in use.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    res.status(201).json({
      success: true,
      data: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: "Something went wrong.",
    });
  }
}

module.exports = {
  registerUser,
};
