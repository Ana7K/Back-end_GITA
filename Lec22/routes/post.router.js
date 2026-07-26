const { Router } = require("express");

const {
  findAll,
  findById,
  createPost,
  deletePost,
  updatePost,
} = require("../services/post.service");

const postRouter = Router();

postRouter.get("/", findAll);

postRouter.get("/:id", findById);

postRouter.post("/", createPost);

postRouter.delete("/:id", deletePost);

postRouter.put("/:id", updatePost);

module.exports = postRouter;
