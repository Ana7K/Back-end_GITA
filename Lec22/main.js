const express = require("express");
const connectDB = require("./config/connect.db");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = 3030;

app.use(express.json());

connectDB();

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(PORT, () => {
  console.log({
    message: `Server is running on port http://localhost:${PORT}`,
  });
});
