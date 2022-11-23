const express = require("express");
const router = express.Router();

router.get('/notes', (req, res) => {
    res.render('pages/users/notes.ejs', {});
});

router.get('/notes/add', (req, res) => {
    res.render('pages/users/add.ejs', {});
});

router.get('/notes/details', (req, res) => {
    res.render('pages/users/details.ejs', {});
});

router.get('/notes/edit', (req, res) => {
    res.render('pages/users/edit.ejs', {});
});

router.get('/notes/empty', (req, res) => {
    res.render('pages/users/empty.ejs', {});
});

module.exports = router;