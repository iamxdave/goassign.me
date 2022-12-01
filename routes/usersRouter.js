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

// router.get('/', userController.getUsers);

// router.get('/:id', userController.getUserById);

// router.post('/', userController.createUser);

// router.put('/:id', userController.updateUser);

// router.delete('/:id', userController.deleteUser);

module.exports = router;