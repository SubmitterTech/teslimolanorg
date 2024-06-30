const express = require("express");
const {
  addHutbe,
  getHutbeler,
  getHutbeBySlug,
  updateHutbe,
  deleteHutbeById,
  deleteHutbeBySlug,
  getFeaturedSermons,
} = require("../controllers/hutbeController");

const router = express.Router();

router.post("/ekle", addHutbe);
router.get("/getir", getHutbeler);
router.get("/getir/vitrin",getFeaturedSermons);
router.get("/getir/:slug", getHutbeBySlug);
router.put("/guncelle/:slug", updateHutbe);
router.delete("/sil/slug/:slug", deleteHutbeBySlug);
router.delete("/sil/id/:id", deleteHutbeById);

module.exports = router;