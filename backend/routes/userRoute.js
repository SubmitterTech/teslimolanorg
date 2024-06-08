const express = require('express');
const { createUser, getAllUsers, deleteUser, getUserByEmail, updateEmail, updatePassword, deleteAllUsers, loginUser } = require('../controllers/accountsController');

const router = express.Router();
router.post('/kullanici/ekle',createUser);
router.get('/kullanici/getir',getAllUsers);
router.post('/kullanici/getir/email',getUserByEmail);
router.patch('/kullanici/guncelle/email',updateEmail);
router.patch('/kullanici/guncelle/parola',updatePassword);
router.delete('/kullanici/sil/:id',deleteUser);
router.delete('/kullanici/sil', deleteAllUsers); // Yeni route'u ekleyin
router.post('/kullanici/giris', loginUser); // Yeni login route'u ekleyin

module.exports = router;