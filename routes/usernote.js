const express = require("express");
const router = express.Router();

router.get('/usernotes', (req, res) => {
    res.render('pages/usernotes/index.ejs', {});
});

router.get('/usernotes/add', (req, res) => {
    res.render('pages/usernotes/add.ejs', {});
});

router.get('/usernotes/details', (req, res) => {
    res.render('pages/usernotes/details.ejs', {});
});

router.get('/usernotes/edit', (req, res) => {
    res.render('pages/usernotes/edit.ejs', {});
});

router.get('/usernotes/empty', (req, res) => {
    res.render('pages/usernotes/empty.ejs', {});
});

module.exports = router;