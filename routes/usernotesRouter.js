const express = require("express");
const router = express.Router();

const usernoteController = require('../controllers/usernoteController');

router.get('/', usernoteController.showUsernotes);

router.get('/add', usernoteController.showUsernoteAdd);

router.get('/edit', usernoteController.showUsernoteEdit);

router.get('/details', usernoteController.showUsernoteDetails);

module.exports = router;