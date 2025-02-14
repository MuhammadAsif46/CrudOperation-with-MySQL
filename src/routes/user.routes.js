import { Router } from "express";
import {
  getAllUser,
  AddUser,
  UpdateUser,
  DeleteUser,
  getUserById,
} from "../controllers/index.js";

const router = Router();

// Secure routes:
router.route("/users").get(getAllUser);
router.route("/users/:userId"). get(getUserById);
router.route("/AddUser").post(AddUser);
router.route("/UpdateUser/:userId").put(UpdateUser);
router.route("/deleteUser/:userId").delete(DeleteUser);

export default router;