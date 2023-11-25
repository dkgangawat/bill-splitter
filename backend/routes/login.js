const express = require("express");
const User = require("../models/userSchema");
const { generateToken } = require("../helper/generateToken");
const router = new express.Router();
const bcrypt = require("bcrypt");

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    console.log(req.body);
    const createdUser = await user.save();
    const token = generateToken(createdUser.b_id);
    res.cookie("user", token);
    res.status(201).json({
      message: "signup successful",
      success: true,
      b_id: createdUser.b_id,
    });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ success: false, error: "Failed to create user" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    // Compare the password with the hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = generateToken(user.b_id);
    res.cookie("user", token);
    res.json({ success:true, message: "Login successful", user, token });
  } catch (error) {
    logger.error("Error during user login:", error);
    res.status(500).json({ success:false, error: "Internal server error" });
  }
});

module.exports = router;
