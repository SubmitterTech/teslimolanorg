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

exports.getPosts= async(req,res)=>{
  try {
    const allPosts = await postModel.find().sort({ createdAt: -1 }); // oluşturulma tarihine göre tersten sıralar
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

exports.getPostWithType = async (req,res) => {
  try {
    const type = req.body.postType;
    const post = await postModel.find({postType:type});
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}