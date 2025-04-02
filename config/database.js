import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //check if we are already connected to the database
  if (connected) {
    console.log("MongoDB already connected");
    return;
  }

  //connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
