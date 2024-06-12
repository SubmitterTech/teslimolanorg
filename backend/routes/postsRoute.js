const express = require("express");
const { getFeaturedArticles, getFeaturedPerspectives, getPostContent, getFeaturedVideos } = require("../controllers/postsController");

const router = express.Router();

router.get("/makaleler",getFeaturedArticles);
router.get('/perspektifler', getFeaturedPerspectives);
router.get('/videolar',getFeaturedVideos);
router.get('/makale/:slug',getPostContent);
router.get('/perspektif/:slug',getPostContent);

module.exports = router;