const postModel = require("../models/postModel");
const fs = require("fs");
const path = require("path");

const makeSlug = (title) => {
  const turkishMap = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ı: "i",
    İ: "I",
    ö: "o",
    Ö: "O",
    ş: "s",
    Ş: "S",
    ü: "u",
    Ü: "U",
  };

  return title
    .split("")
    .map((char) => turkishMap[char] || char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

exports.createPost = async (req, res) => {
  try {
    const {
      title,
      text,
      imgSrc,
      tags,
      postType,
      verses,
      appendices,
      relatedArticles,
    } = req.body;
    const slug = makeSlug(title);
    const newPost = new postModel({
      title,
      text,
      imgSrc,
      tags,
      postType,
      slug,
      verses,
      appendices,
      relatedArticles,
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      text,
      imgSrc,
      tags,
      postType,
      verses,
      appendices,
      relatedArticles,
    } = req.body;
    const slug = makeSlug(title);

    // Güncellenen gönderiyi al
    const existingPost = await postModel.findById(id);
    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Yeni ve eski içeriklerden resim yollarını çıkar
    const oldImagePaths = extractImagePaths(existingPost.text);
    const newImagePaths = extractImagePaths(text);

    // Eski içerikte olup yeni içerikte olmayan resimleri sil
    const imagesToDelete = oldImagePaths.filter(
      (oldPath) => !newImagePaths.includes(oldPath)
    );

    for (const imagePath of imagesToDelete) {
      const fullPath = path.join(__dirname, "../assets/uploads", path.basename(imagePath));
      await deleteImage(fullPath);
    }

    // Kapak fotoğrafını kontrol et ve gerekirse sil
    if (existingPost.imgSrc && imgSrc !== existingPost.imgSrc) {
      const coverImagePath = path.join(
        __dirname,
        "../assets/uploads",
        existingPost.imgSrc
      );
      await deleteImage(coverImagePath);
    }

    // Gönderiyi güncelle
    const updatedPost = await postModel.findByIdAndUpdate(
      id,
      {
        title,
        text,
        imgSrc,
        tags,
        postType,
        slug,
        verses,
        appendices,
        relatedArticles,
      },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const allPosts = await postModel.find().sort({ createdAt: -1 }); // oluşturulma tarihine göre tersten sıralar
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPostWithType = async (req, res) => {
  try {
    const type = req.params.postType;
    const post = await postModel
      .find({ postType: type })
      .sort({ createdAt: -1 });
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
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteImage = async (imagePath) => {
  if (fs.existsSync(imagePath)) {
    try {
      await fs.promises.unlink(imagePath);
      console.log("Image successfully deleted:", imagePath);
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  } else {
    console.error("Image not found:", imagePath);
  }
};

const extractImagePaths = (htmlContent) => {
  const imagePaths = [];
  const regex = /<img[^>]+src="([^">]+)"/g;
  let match;
  while ((match = regex.exec(htmlContent))) {
    imagePaths.push(match[1]);
  }
  return imagePaths;
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Kapak fotoğrafını silme
    if (post.imgSrc) {
      const coverImagePath = path.join(
        __dirname,
        "../assets/uploads",
        post.imgSrc
      );

      console.log("Attempting to delete cover image at path:", coverImagePath);

      if (fs.existsSync(coverImagePath)) {
        console.log("Cover image exists at path:", coverImagePath);
        await deleteImage(coverImagePath);
      } else {
        console.error("Cover image not found at path:", coverImagePath);
      }
    }

    // İçerikteki resimleri silme
    const contentImagePaths = extractImagePaths(post.text).map((src) =>
      path.join(__dirname, "../assets/uploads", path.basename(src))
    );

    for (const imagePath of contentImagePaths) {
      console.log("Attempting to delete content image at path:", imagePath);
      if (fs.existsSync(imagePath)) {
        await deleteImage(imagePath);
      } else {
        console.error("Content image not found at path:", imagePath);
      }
    }

    await postModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  // Yalnızca dosya adını döndür
  res.json({ filePath: req.file.filename });
};