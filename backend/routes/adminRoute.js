const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { uploadFile, createPost, getPosts, getPostWithType } = require('../controllers/adminController');

router.post('/admin/upload', upload.single('file'), uploadFile);

router.post('/admin/addpost', createPost);

router.get('/admin/yazilar',getPosts);

router.post('/admin/yazilars',getPostWithType);

router.get('/admin', (req, res) => {
  res.send('Admin paneline hoşgeldiniz.');
});



module.exports = router;
