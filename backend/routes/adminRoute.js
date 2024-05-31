const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
    res.send('Admin paneline hoşgeldiniz.');
});

module.exports = router;
