const express = require("express");
const {
  addHutbe,
  getHutbeler,
  getHutbeBySlug,
  updateHutbe,
  deleteHutbe,
} = require("../controllers/hutbeController");

const router = express.Router();

router.post("/ekle", addHutbe);
router.get("/getir", getHutbeler);
router.get("/getir/:slug", getHutbeBySlug);
router.put("/guncelle/:slug", updateHutbe);
router.delete("/sil/:slug", deleteHutbe);

module.exports = router;