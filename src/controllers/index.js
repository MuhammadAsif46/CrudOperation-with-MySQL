import db from "../db/index.js";

// Get all user list:
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

// Get user by id:
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
const AddUser = (req, res) => {
  const { firstName, lastName, email, phone } = req;
  console.log(firstName, lastName, email, phone);
};
const UpdateUser = (req, res) => {};
const DeleteUser = (req, res) => {};

export { getAllUser, AddUser, UpdateUser, DeleteUser, getUserById };




