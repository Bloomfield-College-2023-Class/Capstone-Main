import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Get all users from sql database
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["firstName", "lastName", "email", "phoneNumber", "username"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// Hash passwords
//const salt = await bcrypt.genSalt();
//const hashPassword = await bcrypt.hash(password, salt);

// Hash passwords
//const salt = await bcrypt.genSalt();
//const hashPassword = await bcrypt.hash(password, salt);
export const Register = async (req, res) => {
  // Get the fields that we are going to register
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    username,
    phoneNumber,
  } = req.body;

  //Make sure passwords match
  if (password !== confirmPassword)
    return res.status(400).json({ msg: "passwords do not match" });

  //Hash passwords
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    // Update table
    await User.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      phoneNumber: phoneNumber,
      email: email,
      psw: hashPassword,
      userType: "student",
    });
    res.json({ msg: "success registration" }); // send a response indicating success
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "registration failed" }); // send a response indicating failure
  }
};

export const Login = async (req, res) => {
  try {
    const user = await User.findAll({
      where: {
        username: req.body.username,
      },
    });

    //Verify Passwords
    const passwordMatch = await bcrypt.compare(req.body.password, user[0].psw);
    if (!passwordMatch) return res.status(400).json({ msg: "Wrong Password" });

    const userID = user[0].userID;
    const name = user[0].firstName;
    const email = user[0].email;

    res.json({ msg: "success" });
  } catch (error) {
    res.status(404).json({ msg: "User not found" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const user = await User.findAll({
    where: {
      refreshToken: refreshToken,
    },
  });

  if (!user[0]) return res.sendStatus(204);
  const username = user[0].username;

  await User.update(
    { refresh_Token: null },
    {
      where: {
        username: username,
      },
    }
  );

  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
