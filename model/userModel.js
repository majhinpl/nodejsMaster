const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  jobTitle: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
