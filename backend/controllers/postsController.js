const postModel = require("../models/postModel");

exports.getFeaturedArticles = async (req, res) => {
  try {
    const articles = await postModel
      .find({ postType: "Makale" })
      .sort({ createdAt: -1 })
      .limit(4);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await postModel
      .find({ postType: "Makale" })
      .sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFeaturedPerspectives = async (req, res) => {
  try {
    const perspectives = await postModel
      .find({ postType: "Perspektif" })
      .sort({ createdAt: -1 })
      .limit(4); // Limit: 4 öne çıkan perspektif
    res.status(200).json(perspectives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getAllPerspectives = async (req, res) => {
  try {
    const perspectives = await postModel
      .find({ postType: "Perspektif" })
      .sort({ createdAt: -1 });
    res.status(200).json(perspectives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFeaturedVideos = async (req, res) => {
  try {
    const videos = await postModel
      .find({ postType: "Video" })
      .sort({ createdAt: -1 })
      .limit(4); // Limit: 4 öne çıkan perspektif
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await postModel
      .find({ postType: "Video" })
      .sort({ createdAt: -1 });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPostContent = async (req, res) => {
  try {
    const { slug } = req.params;
    const article = await postModel.findOne({ slug }); // Slug'a göre makaleyi bul
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.searchPosts = async (req, res) => {
  try {
    const { query, page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const regex = new RegExp(query, "i"); // 'i' flag is for case-insensitive search

    const results = await postModel
      .find({
        $or: [{ title: { $regex: regex } }, { text: { $regex: regex } }],
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await postModel.countDocuments({
      $or: [{ title: { $regex: regex } }, { text: { $regex: regex } }],
    });

    res.status(200).json({ results, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPostsWithTag = async (req, res) => {
  const tag = req.params.etiket;
  try {
    const posts = await postModel.find({ tags: tag });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getLatestPosts = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};