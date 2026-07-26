const express = require("express");
const connectDB = require("./config/connect.db");

const userRouter = require("./routes/user.router");
const postRouter = require("./routes/post.router");
const authRouter = require("./auth/auth.router");

const app = express();
const PORT = 3030;

// middleware
app.use(express.json());

// database
connectDB();

// routes
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);
// default route
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(PORT, () => {
  console.log({
    message: `Server is running on port http://localhost:${PORT}`,
  });
});
