const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
var cookieParser = require('cookie-parser');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: 'password',
    resave: false
}));
app.use(express.json());

const dbInit = require('./db/sequelize/config/init');

dbInit()
    .catch(err => {
        console.log(err);
    });

app.use(cookieParser('secret'));

const i18n = require('i18n');
i18n.configure({
   locales: ['pl', 'en'],
   directory: path.join(__dirname, 'locales'),
   objectNotation: true,
   cookie: 'acme-hr-lang',
});

app.use(i18n.init);

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

app.use((req, res, next) => {
    if(!res.locals.lang) {
        const currentLang = req.cookies['acme-hr-lang'];
        res.locals.lang = currentLang;
    }
    next();
});

const auth = require('./utils/auth');
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/usersRouter");
const noteRouter = require("./routes/notesRouter");
const usernoteRouter = require("./routes/usernotesRouter");


const permit = auth.permitAuthenticatedUser;
app.use('/', indexRouter);
app.use('/users', permit, userRouter);
app.use('/notes', permit, noteRouter);
app.use('/usernotes', permit, usernoteRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});