const express = require("express");
const app = express();
const PORT = 8000;

const { logReqRes } = require("./middlewares");
const userRouter = require("./routes/userRoute");

const dbConnect = require("./database");
const User = require("./model/userModel");
// const users = require("./MOCK_DATA.json");

dbConnect();

// other way to connect the database.
// mongoose
//   .connect(
//     "mongodb+srv://stockslifyblog:dbpassword@cluster0.9ydztor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("db connected"))
//   .catch((err) => console.log("mongo err", err));

// middleware - plugin
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRouter);
app.use(logReqRes("log.txt"));

// server
app.listen(PORT, (req, res) => {
  console.log(`server started at ${PORT}`);
});

// const myServer = http.createServer(app);

// myServer.listen(8000, (req, res) => {
//   console.log("server started");
// });
