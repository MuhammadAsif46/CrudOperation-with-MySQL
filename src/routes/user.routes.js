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
router.route("/getUsers").get(getAllUser);
router.route("/AddUser").post(AddUser);
router.route("/UpdateUser/:id").put(UpdateUser);
router.route("/deleteUser/:id").delete(DeleteUser);
router.route("/getUser/:id").get(getUserById);

export default router;