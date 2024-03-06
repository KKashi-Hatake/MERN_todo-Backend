import express from "express";
import {
  isLoggedIn,
  loginUser,
  logoutUser,
  registerUser,
} from "../Controllers/user.controller.js";
import { isAuthenticatedUser } from "../Middlewares/auth.js";


const router = express.Router();

router.route("/").get((req,res)=>{res.status(200).send("Welcome User, Please Login or Register to continue further")});
router.route("/register").post( registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticatedUser, logoutUser);
router.route("/isloggedin").get(isAuthenticatedUser, isLoggedIn);

export default router;
