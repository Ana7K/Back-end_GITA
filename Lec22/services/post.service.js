const postModel = require("../models/posts.model");

const findAll = async (req, res) => {
  const posts = await postModel.find().populate("user");

  res.json({
    message: "found all posts successfully",
    data: posts,
  });
};

const findById = async (req, res) => {
  const { id } = req.params;

  const post = await postModel.findById(id).populate("user");

  res.json({
    message: "found post successfully",
    data: post,
  });
};

const createPost = async (req, res) => {
  const { title, description, user } = req.body;

  const newPost = await postModel.create({
    title,
    description,
    user,
  });

  res.json({
    message: "post created successfully",
    data: newPost,
  });
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const deletedPost = await postModel.findByIdAndDelete(id);

  res.json({
    message: "post deleted successfully",
    data: deletedPost,
  });
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  const updatedPost = await postModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.json({
    message: "post updated successfully",
    data: updatedPost,
  });
};

module.exports = {
  findAll,
  findById,
  createPost,
  deletePost,
  updatePost,
};
