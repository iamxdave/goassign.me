const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));


const userRouter = require("./routes/user");
const noteRouter = require("./routes/note");
const usernoteRouter = require("./routes/usernote");

app.use(userRouter);
app.use(noteRouter);
app.use(usernoteRouter);

app.get('/', (req, res) => {
    res.render('index', {});
});

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});