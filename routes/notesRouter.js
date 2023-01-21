const express = require("express");
const router = express.Router();

const noteController = require('../controllers/noteController');

router.get('/', noteController.showNotes);

router.get('/add', noteController.showNoteAdd);

router.get('/edit/:id', noteController.showNoteEdit);

router.get('/details/:id', noteController.showNoteDetails);

router.post('/add', noteController.addNote);

router.post('/edit', noteController.updateNote);

router.get('/delete/:id', noteController.deleteNote);

module.exports = router;