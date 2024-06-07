const express = require('express');
const { createUser, getAllUsers, deleteUser, getUserByEmail } = require('../controllers/accountsController');

const router = express.Router();
router.post('/admin/kullanici/ekle',createUser);
router.get('/admin/kullanici/getir',getAllUsers);
router.post('/admin/kullanici/getir/email',getUserByEmail);
router.delete('/admin/kullanici/sil/:id',deleteUser);

module.exports = router;