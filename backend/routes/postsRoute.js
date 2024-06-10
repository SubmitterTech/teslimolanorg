const express = require("express");
const { getFeaturedArticles, getFeaturedPerspectives, getPostContent } = require("../controllers/postsController");

const router = express.Router();

router.get("/makaleler",getFeaturedArticles);
router.get('/perspektifler', getFeaturedPerspectives);
router.get('/makale/:slug',getPostContent);

module.exports = router;