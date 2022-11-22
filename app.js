const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {});
});

app.get('pages/notes/add-invalid', (req, res) => {
    res.render('pages/notes/add-invalid', {});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});