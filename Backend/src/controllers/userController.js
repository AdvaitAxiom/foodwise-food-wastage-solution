// controllers/userController.js
import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import BlackListedTokens from "../models/blacklistedTokesModel.js";
import { CustomStatusCodes } from "../Utilities/CustomStatusCodes.js";
import { newAccessToken, signUser } from "../Helpers/jwt.auth.helper.js";

// Register a new user
export const registerUser = async (req, res) => {
  const { username, password, email, recipeSuggestionChat, mealPlanningChat } = req.body;
  try {
    // Create a new user with all provided fields
    const newUser = new User({
      username,
      password,
      email,
      recipeSuggestionChat: recipeSuggestionChat || [],  // Default to empty array if not provided
      mealPlanningChat: mealPlanningChat || []             // Default to empty array if not provided
    });

    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Log in a user
export const loginUser = async (req, res) => {
  const {username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const { accessToken, refreshToken } = signUser(username)
    res.status(CustomStatusCodes.SUCCESS).send({
      accessToken: accessToken,
      refreshToken: refreshToken,
      userId: user._id,
      code: CustomStatusCodes.SUCCESS
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const refresh = async (req, res) => {
  const { username } = req
  const {accessToken} = newAccessToken(username)

  res.status(CustomStatusCodes.SUCCESS).send({
      accessToken: accessToken,
      code: CustomStatusCodes.SUCCESS
  })
}

// Log out a user
export const logoutUser = async (req, res) => {
  try {
    const token = req.token;

    // Add the token to the blacklist
    const blacklisted = new BlackListedTokens({ token });
    await blacklisted.save();

    res.status(CustomStatusCodes.SUCCESS).send({
      token: blacklisted.token,
      message: "TOKEN_DELETED",
      code: CustomStatusCodes.SUCCESS
    });
  } catch (error) {
    console.error('Error blacklisting token:', error);
    res.status(500).send({
      message: 'Internal Server Error',
      code: CustomStatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

// Get user profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error getting profile", error });
  }
};
