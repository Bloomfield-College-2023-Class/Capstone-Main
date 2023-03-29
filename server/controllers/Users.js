import User from "../models/UserModel.js";
import bcrypt from "bcrypt";


// Get all users from sql database
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["firstName", "lastName", "email", "phoneNumber", "username", "userID", "userType"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

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
    console.log("hrmn")
    //Get the user from db
    const user = await User.findAll({
      where: {
        username: req.body.username,
      },
      attributes: ["userID", "psw", "firstName", "lastName", "email", "phoneNumber", "username", "userType"]
    });

    //Verify Passwords
    const passwordMatch = await bcrypt.compare(req.body.password, user[0].psw);
    if (!passwordMatch) return res.status(400).json({ msg: "Wrong Password" });

    //Set the session user for express-session
    req.session.user = {
      userID: user[0].userID,
      firstName: user[0].firstName,
      lastName: user[0].lastName,
      email: user[0].email,
      phoneNumber: user[0].phoneNumber,
      username: user[0].username,
      userType: user[0].userType,
    };

    const userObj = user[0].toJSON();
    console.log(userObj)
    const { userID, firstName, lastName, phoneNumber, email, userType, username } = userObj;
    res.json({ msg: "success", user: { userID, firstName, lastName, phoneNumber, email, userType, username }, sessionUser : req.session.user });
  } catch (error) {
    //If user does not exists
    res.status(404).json({ msg: "User not found" });
  }
};

export const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ msg: "Error logging out" });
    } else {
      res.status(200).json({ msg: "Logged out successfully" });
    }
  });
};

// Update user information by userID
export const updateUser = async (req, res) => {
  try {
    const { userID, firstName, lastName, email, phoneNumber, password, username, userType } = req.body;
    let updatedUser = {
      userID,
      firstName,
      lastName,
      email,
      phoneNumber, 
      username,
      userType,
      password
    };
    if (password) {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      updatedUser.psw = hashPassword;
    }
    const user = await User.findOne({ where: { userID } });
    if (!user) return res.status(404).json({ msg: "User not found" });
    await User.update(updatedUser, { where: { userID } });
    return res.json({ msg: "User updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to update user" });
  }
};
