const express = require("express");
const {
  getFeaturedArticles,
  getFeaturedPerspectives,
  getPostContent,
  getFeaturedVideos,
  getAllArticles,
  getAllPerspectives,
  getAllVideos,
  searchPosts,
  getPostsWithTag,
} = require("../controllers/postsController");

const router = express.Router();

router.get("/makaleler", getFeaturedArticles);
router.get("/makaleler/listele", getAllArticles);
router.get("/perspektifler", getFeaturedPerspectives);
router.get("/perspektifler/listele", getAllPerspectives);
router.get("/videolar", getFeaturedVideos);
router.get("/videolar/listele", getAllVideos);
router.get("/makale/:slug", getPostContent);
router.get("/perspektif/:slug", getPostContent);
router.get("/video/:slug", getPostContent);
router.get("/search", searchPosts);
router.get("/etiketler/:etiket", getPostsWithTag);

module.exports = router;
