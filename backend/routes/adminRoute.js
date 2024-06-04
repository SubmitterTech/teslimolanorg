const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { uploadFile } = require('../controllers/uploadController');

router.post('/admin/upload', upload.single('file'), uploadFile);

router.get('/admin', (req, res) => {
    res.send('Admin paneline hoşgeldiniz.');
});

module.exports = router;
