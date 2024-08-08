import express from "express";
import { registerUserHandler } from "../handlers/userHandler.js";
import { authHandler } from "../handlers/authhandler.js";
import forgotPasswordHandler from "../handlers/postPasswordForgotHandler.js";
import {
  deletedUser,
  findOneUser,
  getAllUser,
} from "../controllers/userController.js";
import { verifyEmailHandler } from "../handlers/emailHandler.js";
import {
  protect,
  protectAccountOwner,
} from "../config/middleware/user.middleware.js";
import changePasswordHandler from "../handlers/postPasswordChangeHandler.js";

export const router = express.Router();

router.get("/", getAllUser);

router.route("/:id").delete(protect, deletedUser).get(findOneUser);

router.post("/register", registerUserHandler);
router.post("/validate-user", authHandler);
router.post(
  "/change-password",
  protect,
  changePasswordHandler
);
router.post('/forgot-password', forgotPasswordHandler)
router.post("/verify-email", verifyEmailHandler);
