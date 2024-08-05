import { Router } from "express";
import { deleteAccount} from "../handlers/deleteUser.js";

const deleteUserRouter = Router();

deleteUserRouter.delete("/:id ", deleteAccount);

export default deleteUserRouter;
