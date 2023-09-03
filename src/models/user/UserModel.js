import UserSchema from "./UserSchema.js";

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};

export const getUserByEamil = (email) => {
  return UserSchema.findOne({ email });
};

export const getUserById = (_id) => {
  return UserSchema.findOne(_id);
};
