import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/nottoDoDB");
    con && console.log("mongo is connected");
  } catch (err) {
    console.log(err);
  }
};
