const express = require('express');
const { createConfig, updateConfig } = require('../controllers/configController');

const router= express.Router();

router.post('/admin/ayarlar/ekle', createConfig);
router.patch('/admin/ayarlar/:name', updateConfig);

module.exports = router;