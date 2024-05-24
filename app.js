const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8000;

const mongoose = require("mongoose");

const users = require("./MOCK_DATA.json");
// const dbConnect = require("./database");
const User = require("./model/userModel");

// dbConnect();

mongoose
  .connect(
    "mongodb+srv://stockslifyblog:dbpassword@cluster0.9ydztor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log("mongo err", err));

// middleware - plugin
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
  res.send(html);
});

// REST APIs

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // Edit user with id
    const id = req.params.id;
    const { first_name, last_name, email, job_title } = req.body;
    const oldData = users.find(id);

    users.push({ ...oldData });

    console.log(oldData);

    return res.json({ status: "succes" });
  })

  .delete((req, res) => {
    // Delete user with id
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  //   TODO: create new users
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

// server
app.listen(PORT, (req, res) => {
  console.log("server started");
});

// const myServer = http.createServer(app);

// myServer.listen(8000, (req, res) => {
//   console.log("server started");
// });
