const User = require("../model/userModel");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({});
  res.json(allUsers);
}

async function handleGetUserById(req, res) {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    res.status(404).json({
      error: "user not found",
    });
  }
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  const id = req.params.id;
  const { firstName, lastName, email, jobTitle, gender } = req.body;
  await User.findByIdAndUpdate(id, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    jobTitle: jobTitle,
    gender: gender,
  });
  return res.status(200).json({
    message: "undate success",
  });
}

async function handleDeleteUserById(req, res) {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  return res.json({ status: "success" });
}

async function handleCreateNewUser(req, res) {
  //   TODO: create new users
  const { firstName, lastName, email, jobTitle, gender } = req.body;

  if (!firstName || !firstName || !email || !jobTitle || !gender) {
    res.status(400).json({
      msg: "All field are required.",
    });
  }
  const result = await User.create({
    firstName,
    lastName,
    email,
    jobTitle,
    gender,
  });

  console.log("result", result);
  return res.status(201).json({
    msg: "user created successfully",
    id: result.id
  });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
};
