const express = require("express");
const {
  addHutbe,
  getHutbeler,
  getHutbeBySlug,
  updateHutbe,
  deleteHutbeById,
  deleteHutbeBySlug,
} = require("../controllers/hutbeController");

const router = express.Router();

router.post("/ekle", addHutbe);
router.get("/getir", getHutbeler);
router.get("/getir/:slug", getHutbeBySlug);
router.put("/guncelle/:slug", updateHutbe);
router.delete("/sil/slug/:slug", deleteHutbeBySlug);
router.delete("/sil/id/:id", deleteHutbeById);

module.exports = router;