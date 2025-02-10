const getAllUser = (req, res) => {};
const AddUser = (req, res) => {
  const { firstName, lastName, email, phone } = req;
  console.log(firstName, lastName, email, phone);
  
};
const UpdateUser = (req, res) => {};
const DeleteUser = (req, res) => {};
const getUserById = (req, res) => {};

export { getAllUser, AddUser, UpdateUser, DeleteUser, getUserById };
