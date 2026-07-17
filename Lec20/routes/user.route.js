const { Router } = require("express");
const {
  findAllUser,
  getByIdUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../services/user.service");

const userRouter = Router();

userRouter.get("/", findAllUser);

userRouter.get("/:id", getByIdUser);

userRouter.post("/", createUser);

userRouter.delete("/:id", deleteUser);

userRouter.put("/:id", updateUser);

module.exports = userRouter;
