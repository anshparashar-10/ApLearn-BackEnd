import express from "express";
import {
  loginController,
  registerController,
  forgotPassword,
  resetPassword,
  registerQuery,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

// forgotpassword
router.post("/password/forgot", forgotPassword);

//resetpassword
router.put("/password/reset/:token", resetPassword);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//consultancy form
router.post("/", registerQuery);

export default router;
