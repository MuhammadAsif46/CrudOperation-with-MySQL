import { Router } from "express";
import {
  getAllUser,
  createUser,
  UpdateUser,
  DeleteUser,
  getUserById,
} from "../controllers/index.js";

const router = Router();

// Secure routes:
// Get All Users || GET
router.route("/users").get(getAllUser);

// Get User BY Id || GET
router.route("/users/:userId"). get(getUserById);

// CREATE User || POST
router.route("/create").post(createUser);

// Update User BY Id || PUT
router.route("/UpdateUser/:userId").put(UpdateUser);

// DELETE User BY Id || DELETE
router.route("/deleteUser/:userId").delete(DeleteUser);

export default router;