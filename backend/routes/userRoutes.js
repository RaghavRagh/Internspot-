import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/profile", authenticate, getUserProfile);
router.put("/profile", authenticate, updateUserProfile);

export default router;
