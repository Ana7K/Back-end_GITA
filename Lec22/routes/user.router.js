const { Router } = require("express");

const {
  findAll,
  findById,
  deleteUser,
  updateUser,
} = require("../services/user.service");

const userRouter = Router();

userRouter.get("/", findAll);

userRouter.get("/:id", findById);

userRouter.delete("/:id", deleteUser);

userRouter.put("/:id", updateUser);

module.exports = userRouter;
