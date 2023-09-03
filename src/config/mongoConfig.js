import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CLIENT);
    conn && console.log("Mongo Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
