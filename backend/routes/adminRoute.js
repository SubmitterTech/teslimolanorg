const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { uploadFile, createPost, getPosts, getPostWithType, deletePost } = require('../controllers/adminController');

router.post('/admin/upload', upload.single('file'), uploadFile);

router.post('/admin/addpost', createPost);

router.get('/admin/yazilar',getPosts);

router.get('/admin/yazilar/:postType', getPostWithType);

router.delete('/admin/yazilar/:id', deletePost);

router.get('/admin', (req, res) => {
  res.send('Admin paneline hoşgeldiniz.');
});



module.exports = router;
