import { getUserById } from "../models/user/UserModel.js";

export const auth = async (req, res, next) => {
  // stop here and response to user
  try {
    //every request have userId
    //get the user from database
    const { authorization } = req.headers;

    const user = await getUserById(authorization);

    if (user?._id) {
      user.password = undefined;
      req.userInfo = user;
      //check the role
      //let it go to next step(router)
      //or
      return next();
    }

    res.json({
      status: "error",
      messgae: "Sorry, you do not have permission to the service.",
    });
  } catch (error) {
    res.json({
      status: "error",
      messgae: error.message,
    });
  }
};

export const adminAuth = async (req, res, next) => {
  //since req.userInfo has user data
  try {
    const { role } = req.userInfo;
    console.log(role);

    role === "admin"
      ? next()
      : res.json({
          status: "error",
          messgae: "Sorry, only admin can access the service.",
        });
  } catch (error) {
    res.json({
      status: "error",
      messgae: error.message,
    });
  }
};
