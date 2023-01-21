const express = require("express");
const router = express.Router();
const langController = require('../controllers/langController');

router.get('/changeLang/:lang', langController.changeLang);

router.get('/', (req, res) => {
    res.render('index', { navLocation: 'Main' });
});

module.exports = router;