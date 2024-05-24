const mongoose = require("mongoose");

// database connections

const connectString =
  "mongodb+srv://stockslifyblog:blogstockslify@cluster0.9ydztor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function dbConnect() {
  await mongoose.connect(connectString);
  console.log("DB connected successfully");
}

module.exports = dbConnect;
