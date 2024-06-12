const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    postType: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [String], // Tags should be an array of strings
    },
    imgSrc: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    verses: [String], // Eklemeler
    appendices: [{ link: String, title: String }], // Eklemeler
    videoUrl: {
      type: String, // Video URL'sini saklamak için eklenen alan
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);