import express from "express";
import { registerUserHandler } from "../handlers/userHandler.js";
import recoveryPasswordHandler from "../handlers/postPasswordRecoveryHandler.js";
import {
  deleteUser,
  findOneUser,
  getAllUser,
} from "../controllers/userController.js";
import {verifyEmailHandler } from "../handlers/emailHandler.js";
import { authHandler } from "../handlers/authHandler.js";
// import { authHandler } from "../handlers/authhandler.js";

export const router = express.Router();

router.get("/", getAllUser);

router.post("/register", registerUserHandler);
router.post("/validate-user", authHandler);
router.post("/recovery-password", recoveryPasswordHandler);
router.post("/verify-email", verifyEmailHandler);
