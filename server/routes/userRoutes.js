import User from "../models/user.js"; 
import Router from "express";
import { registerUser, loginUser, verifyUser } from "../controllers/userController.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify-user", verifyUser);


export default router;