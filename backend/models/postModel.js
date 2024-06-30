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
      default:""
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    verses: [String], // Eklemeler
    appendices: [{ link: String, title: String }], // Eklemeler
  },
  {
    timestamps: true,
  }
);

// Text index oluşturma
postSchema.index({ title: 'text', text: 'text', tags: 'text' });

module.exports = mongoose.model("Post", postSchema);