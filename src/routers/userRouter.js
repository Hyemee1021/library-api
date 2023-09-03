import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { getUserByEamil } from "../models/user/UserModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "Here are the user informations",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { password } = req.body;

    req.body.password = hashPassword(password);

    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "New user has been created successfull",
        })
      : res.json({
          status: "error",
          message: "Unable to craete user, try again later",
        });
  } catch (error) {
    let msg = error.message;

    if (msg.includes("E11000 duplicate key error")) {
      msg = "Ther is another user who uses this email in the system";
    }
    res.json({
      status: "error",
      message: msg,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //get the data from login form
    //check if user is exisitng

    const user = await getUserByEamil(email);
    console.log(user);

    if (user?._id) {
      //use bcrypt to check if the password is matchhing
      const isMatched = comparePassword(password, user.password);

      if (isMatched) {
        // user.password = undefined;

        return res.json({
          status: "success",
          message: "Logged in successfully",
          user,
        });
      }
    }
    res.json({
      status: "error",
      message: "failed to login",
    });
  } catch (error) {
    res.json({
      status: error,
      message: error.message,
    });
  }
});
export default router;
