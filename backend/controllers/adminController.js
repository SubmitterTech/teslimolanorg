const postModel = require("../models/postModel");

const makeSlug = (title) => {
  const turkishMap = {
    ç: 'c',
    Ç: 'C',
    ğ: 'g',
    Ğ: 'G',
    ı: 'i',
    İ: 'I',
    ö: 'o',
    Ö: 'O',
    ş: 's',
    Ş: 'S',
    ü: 'u',
    Ü: 'U',
  };

  return title
    .split('')
    .map(char => turkishMap[char] || char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};


exports.createPost = async (req, res) => {
  try {
    const { title, text, imgSrc, tags, postType, verses, appendices, relatedArticles,videoUrl } = req.body;
    const slug = makeSlug(title); 
    const newPost = new postModel({ title, text, imgSrc, tags, postType, slug, verses, appendices, relatedArticles,videoUrl });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};


exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, imgSrc, tags, postType, verses, appendices, relatedArticles } = req.body;
    const slug = makeSlug(title);

    const updatedPost = await postModel.findByIdAndUpdate(
      id,
      { title, text, imgSrc, tags, postType, slug, verses, appendices, relatedArticles },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};
exports.getPosts = async (req, res) => {
  try {
    const allPosts = await postModel.find().sort({ createdAt: -1 }); // oluşturulma tarihine göre tersten sıralar
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

exports.getPostWithType = async (req, res) => {
  try {
    const type = req.params.postType;
    const post = await postModel.find({ postType: type });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await postModel.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ filePath: `/uploads/${req.file.filename}` });
};
  

