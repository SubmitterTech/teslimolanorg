const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const { uploadFile, createPost, getPosts, getPostWithType, deletePost, updatePost, getPostById } = require('../controllers/adminController');

router.post('/upload', upload.single('file'), uploadFile);
router.post('/addpost', createPost);
router.get('/yazilar', getPosts);
router.get('/yazilar/:postType', getPostWithType);
router.delete('/yazilar/sil/:id', deletePost);
router.get('/yazilar/id/:id', getPostById);
router.put('/yazilar/duzenle/:id', updatePost);

router.get('/', (req, res) => {
  res.send('Admin paneline hoşgeldiniz.');
});

module.exports = router;