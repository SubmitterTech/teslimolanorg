const express = require("express");
const { getFeaturedArticles, getFeaturedPerspectives } = require("../controllers/postsController");

const router = express.Router();

router.get("/makaleler",getFeaturedArticles);
router.get('/perspektifler', getFeaturedPerspectives);

module.exports = router;