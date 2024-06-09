const postModel = require("../models/postModel");

exports.getFeaturedArticles = async (req,res) =>{
    try {
      const articles = await postModel.find({postType:"Makale"}).sort({createdAt:-1}).limit(4);
      res.status(200).json(articles);
      
    } catch (error) {
      res.status(500).json({message:error.message});
    }
  }

  exports.getFeaturedPerspectives = async (req, res) => {
    try {
      const perspectives = await postModel.find({ postType: "Perspektif" }).sort({ createdAt: -1 }).limit(4); // Limit: 4 öne çıkan perspektif
      res.status(200).json(perspectives);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };