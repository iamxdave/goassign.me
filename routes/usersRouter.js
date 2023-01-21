const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.showUsers);

router.get('/add', userController.showUserAdd);

router.get('/edit/:id', userController.showUserEdit);

router.get('/details/:id', userController.showUserDetails);

router.post('/add', userController.addUser);

router.post('/edit', userController.updateUser);

router.get('/delete/:id', userController.deleteUser);

module.exports = router;