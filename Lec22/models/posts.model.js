const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("post", postsSchema);
