const { isValidObjectId } = require("mongoose");
const userModel = require("../models/user.model");

const findAllUser = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;

  const skip = (Number(page) - 1) * Number(limit);

  const findAllInfo = await userModel.find().skip(skip).limit(Number(limit));

  res.json({
    message: "find all successfully",
    data: findAllInfo,
  });
};

const createUser = async (req, res) => {
  const { name, age, email } = req.body;
  if (
    !name ||
    typeof name !== "string" ||
    !age ||
    typeof age !== "number" ||
    !email ||
    typeof email !== "string"
  ) {
    return res.json({
      message: "invalid data",
    });
  }

  if (age < 10 || age > 100) {
    return res.json({
      message: "age must be between 10 and 100",
    });
  }

  const findUserByEmail = await userModel.findOne({ email: email });

  if (findUserByEmail) {
    return res.json({ message: "user already exists" });
  }

  const createUser = await userModel.create({ name, age, email });

  res.json({ message: "successfully created new user", data: createUser });
};

const getByIdUser = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.json({ message: "wrong ID", data: null });
  }
  const findUserById = await userModel.findById(id);

  if (!findUserById) {
    return res.json({ message: "couldn't find" });
  }
  res.json({
    message: "successfully found with ID",
    data: findUserById,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.json({ message: "wrong ID", data: null });
  }

  const deletedUser = await userModel.findByIdAndDelete(id);

  if (!deletedUser) {
    return res.json({
      message: "user not found",
    });
  }

  res.json({
    message: "successfully deleted",
    data: deletedUser,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  if (
    !name ||
    typeof name !== "string" ||
    !age ||
    typeof age !== "number" ||
    !email ||
    typeof email !== "string"
  ) {
    return res.json({
      message: "invalid data",
    });
  }

  if (!isValidObjectId(id)) {
    return res.json({ message: "wrong ID", data: null });
  }

  const emailExists = await userModel.findOne({
    email,
    _id: { $ne: id },
  });

  if (emailExists) {
    return res.json({
      message: "email already exists",
    });
  }

  if (age < 10 || age > 100) {
    return res.json({
      message: "age must be between 10 and 100",
    });
  }

  const findUserAndUpdate = await userModel.findByIdAndUpdate(
    id,
    { name, age, email },
    { new: true },
  );

  res.json({
    message: "successfully updated",
    data: findUserAndUpdate,
  });
};

module.exports = {
  findAllUser,
  createUser,
  getByIdUser,
  deleteUser,
  updateUser,
};
