const postModel = require("../models/postModel");

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
};

exports.createPost = async (req, res) => {
  try {
    const newPost = new postModel(req.body);
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};
