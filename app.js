const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));


const userRouter = require("./routes/usersRouter");
const noteRouter = require("./routes/notesRouter");
const usernoteRouter = require("./routes/usernotesRouter");

app.use('/users', userRouter);
app.use('/notes', noteRouter);
app.use('/usernotes', usernoteRouter);

app.get('/', (req, res) => {
    res.render('index', { navLocation: '' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});