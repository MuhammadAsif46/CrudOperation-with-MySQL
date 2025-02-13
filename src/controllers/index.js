const getAllUser = async (req, res) => {
  try {
    const users = await db.query("SELECT * FROM users ORDER BY id DESC");

    if (!users) {
      return res.status(404).send({
        message: "No users found",
      });
    }

    res.send({
      message: "users fetched",
      data: users[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Internal server error",
      error: error?.message,
    });
  }
};
const getUserById = (req, res) => {};
const AddUser = (req, res) => {
  const { firstName, lastName, email, phone } = req;
  console.log(firstName, lastName, email, phone);
};
const UpdateUser = (req, res) => {};
const DeleteUser = (req, res) => {};

export { getAllUser, AddUser, UpdateUser, DeleteUser, getUserById };

