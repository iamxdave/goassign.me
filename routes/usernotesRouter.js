const express = require("express");
const router = express.Router();

const usernoteController = require('../controllers/usernoteController');

router.get('/', usernoteController.showUsernotes);

router.get('/add', usernoteController.showUsernoteAdd);

router.get('/edit/:id', usernoteController.showUsernoteEdit);

router.get('/details/:id', usernoteController.showUsernoteDetails);

router.post('/add', usernoteController.addUsernote);

router.post('/edit', usernoteController.updateUsernote);

router.get('/delete/:id', usernoteController.deleteUsernote);

// router.get('/', usernoteController.getUsernotes);

// router.get('/:id', usernoteController.getUsernoteById);

// router.post('/', usernoteController.createUsernote);

// router.put('/:id', usernoteController.updateUsernote);

// router.delete('/:id', usernoteController.deleteUsernote);

module.exports = router;