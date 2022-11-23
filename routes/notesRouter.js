const express = require("express");
const router = express.Router();

const noteController = require('../controllers/noteController');

router.get('/', noteController.showNotes);

router.get('/add', noteController.showNoteAdd);

router.get('/edit', noteController.showNoteEdit);

router.get('/details', noteController.showNoteDetails);

module.exports = router;