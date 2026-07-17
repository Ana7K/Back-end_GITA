const express = require("express");
const connectDB = require("./config/connect.db");
const userRouter = require("./routes/user.route");

const app = express();
const PORT = 3030;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log({
    message: `Server is running on port http://localhost:${PORT}`,
  });
});