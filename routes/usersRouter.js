const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.showUsers);

router.get('/add', userController.showUserAdd);

router.get('/edit', userController.showUserEdit);

router.get('/details', userController.showUserDetails);

module.exports = router;