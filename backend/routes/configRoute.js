const express = require('express');
const { createConfig, updateConfig, getConfig } = require('../controllers/configController');

const router= express.Router();

router.post('/admin/ayarlar/ekle', createConfig);
router.patch('/admin/ayarlar/guncelle/:name', updateConfig);
router.get('/admin/ayarlar/:name',getConfig);

module.exports = router;