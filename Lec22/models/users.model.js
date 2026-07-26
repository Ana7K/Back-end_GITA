const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    posts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "post",
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("user", userSchema);
