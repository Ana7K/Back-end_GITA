const userModel = require("../models/users.model");

const findAll = async (req, res) => {
  const findAllUser = await userModel.find();

  res.json({
    message: "found all successfully",
    data: findAllUser,
  });
};

const findById = async (req, res) => {
  const { id } = req.params;

  const user = await userModel.findById(id);

  res.json({
    message: "found user successfully",
    data: user,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deletedUser = await userModel.findByIdAndDelete(id);

  res.json({
    message: "deleted successfully",
    data: deletedUser,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  const updatedUser = await userModel.findByIdAndUpdate(
    id,
    {
      name,
      email,
      password,
    },
    {
      new: true,
    },
  );

  res.json({
    message: "updated successfully",
    data: updatedUser,
  });
};

module.exports = {
  findAll,
  findById,
  deleteUser,
  updateUser,
};
