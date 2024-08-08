import jwt from "jsonwebtoken";
import { promisify } from "util";
import { UserService } from "../../services/user.service.js";
import { envs } from "../enviroments/enviroments.js";

const userService = new UserService();

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new Error("Login token is required", 401));
  }

  try {
    const decoded = await promisify(jwt.verify)(token, envs.SECRET_JWT_SEED);
    
    const user = await userService.findOneById(decoded.id);
    
    if (!user) {
      console.log("User not found");
      return next(
        new Error("The owner of this token is no longer available", 401)
      );
    }

    req.sessionUser = user;

    next();
  } catch (err) {
    console.log("Token verification failed", err);
    return next(new Error("Token verification failed", 401));
  }
};

export const protectAccountOwner = async (req, res, next) => {
  const { user, sessionUser } = req;

  if (user?.id !== sessionUser?.id)
    return new Error(
      "Only the account owner can access or modify their data.",
      401
    );
    
  next();
};
