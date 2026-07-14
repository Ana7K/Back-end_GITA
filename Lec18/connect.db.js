const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log({ message: "successfully connected" });
  } catch (error) {
    console.log({ message: "mongo db is not connected", error });
  }
}

module.exports = connectDB;
