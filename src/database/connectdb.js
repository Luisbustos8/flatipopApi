const mongoose = require("mongoose");
require("dotenv").config();

const mongoStr = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
