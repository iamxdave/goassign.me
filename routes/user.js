const express = require("express");
const router = express.Router();

router.get('/users', (req, res) => {
    res.render('pages/users/index.ejs', {});
});

router.get('/users/add', (req, res) => {
    res.render('pages/users/add.ejs', {});
});

router.get('/users/details', (req, res) => {
    res.render('pages/users/details.ejs', {});
});

router.get('/users/edit', (req, res) => {
    res.render('pages/users/edit.ejs', {});
});

router.get('/users/empty', (req, res) => {
    res.render('pages/users/empty.ejs', {});
});

module.exports = router;