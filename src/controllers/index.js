import moment from "moment";
import db from "../db/index.js";

// Get all user list handle:
const getAllUser = async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM users");

    if (!users) {
      return res.status(404).send({
        success: false,
        message: "No users found",
      });
    }

    res.status(200).send({
      success: true,
      message: "users fetched",
      totalUsers: users[0].length,
      data: users[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error?.message,
    });
  }
};

// Get user by id handle:
const getUserById = async (req, res) => {
  const { userId } = req?.params;

  if (!userId) {
    return res.status(400).send({
      success: false,
      message: "userId is required",
    });
  }

  try {
    const [user] = await db.query("SELECT * FROM users WHERE id=? ", [userId]);
    // destructure user array

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }

    res.send({
      success: true,
      message: "user fetched",
      data: user[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error?.message,
    });
  }
};

// CREATE new user handle
const createUser = async (req, res) => {
  const { username, email } = req?.body;

  if (!username || username?.trim() === "") {
    return res.status(400).send({
      success: false,
      message: "username is required",
    });
  }

  if (!email || email?.trim() === "") {
    return res.status(400).send({
      success: false,
      message: "email is required",
    });
  }

  try {
    const insertRes = await db.query(
      "INSERT INTO users (username,email,created_on) VALUES(? , ? , ? )",
      [username, email, moment(new Date()).format("YYYY-MM-DD")]
    );

    if (!insertRes) {
      res.status(404).send({
        success: false,
        message: "Something went wrong while inserting a new user",
      });
    }

    res.status(200).send({
      success: true,
      message: `Post created successfully with id:${insertRes[0]?.insertId}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error?.message,
    });
  }
};

// Update User Hadndle:
const UpdateUser = async (req, res) => {
  const { userId } = req?.params;
  const { username, email } = req?.body;

  if (!userId) {
    return res.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  if (!username || username?.trim() === "") {
    return res.status(400).send({
      success: false,
      message: "username is required",
    });
  }

  if (!email || email?.trim() === "") {
    return res.status(400).send({
      success: false,
      message: "email is required",
    });
  }

  try {
    const updateRes = await db.query(
      "UPDATE users SET username = ?, email = ? WHERE id = ? ",
      [username, email, userId]
    );

    if (!updateRes) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).send({
      success: true,
      message: `User updated successfully with id : ${userId} `,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error?.message,
    });
  }
};

// Delete User Hadndle:
const DeleteUser = async(req, res) => {
  const {userId} = req?.params;
  if (!userId) {
    return res.status(404).send({
      success: false,
      message: "User not found",
    });
  }

  try {
    const deleteRes = await db.query(
      "DELETE FROM users WHERE id = ? ",
      [userId]
    );

    if (!deleteRes) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }

    res.status(200).send({
      success: true,
      message: `User Deleted successfully with id : ${userId} `,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error?.message,
    });
  }
};

export { getAllUser, createUser, UpdateUser, DeleteUser, getUserById };
