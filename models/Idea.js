const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text field."],
    },
    tag: {
      type: String,
    },
    username: {
      // storing for convenience
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Idea", IdeaSchema);
