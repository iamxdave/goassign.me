const express = require("express");
const router = express.Router();
const langController = require('../controllers/langController');
const authController = require('../controllers/authController');

router.get('/changeLang/:lang', langController.changeLang);

router.get('/', (req, res) => {
    res.render('index', { navLocation: 'Main' });
});

router.get('/logout', authController.logout);

router.post('/login', authController.login);

module.exports = router;