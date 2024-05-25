const mongoose = require("mongoose");

// database connections

const connectString =
  "mongodb+srv://ssrblog:QcJ9hvQmcowUbnVi@blog.zvd1g7e.mongodb.net/?retryWrites=true&w=majority&appName=blog";

async function dbConnect() {
  await mongoose.connect(connectString);
  console.log("DB connected successfully");
}

module.exports = dbConnect;
