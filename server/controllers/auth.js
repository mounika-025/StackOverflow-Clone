import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import users from "../models/auth.js";

export const signup = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
      expiresIn: "1hr",
    }); // token for authentication
    res.status(200).json({ result: newUser, token }); //sending response to frontend
  } catch (error) {
    res.status(500).json("something went wrong...");
  }
};

export const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User don't exists" });
    }
    const isPasswordConfirmed = await bcrypt.compare(
      password,
      existingUser.password
    ); //checking users password
    if (!isPasswordConfirmed) {
      return res.status(400).json({ message: "Password is not correct" });
    }
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
      expiresIn: "1hr",
    }); // token for authentication
    res.status(200).json({ result: newUser, token }); //sending response to frontend
  } catch (error) {
    res.status(500).json("something went wrong...");
  }
};
