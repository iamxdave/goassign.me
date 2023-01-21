const UserRepository = require('../repositories/UserRepository');
const auth = require('../utils/auth');

exports.showLogin = (req, res, next) => {
    res.render('pages/auth/login', {
        navLocation: req.__('auth.title'),
        title: req.__('auth.pageTitle')
    })
}


exports.login = (req, res, next) => {
    const email= req.body.email;
    const password = req.body.password;
    UserRepository.getUserByEmail(email)
        .then(user => {
            if(!user) {
                res.render('pages/auth/login', {
                    navLocation: req.__('auth.title'),
                    title: req.__('auth.pageTitle'),
                    loginError: req.__('auth.errors.incorrect')
                })
            } else if(auth.comparePasswords(password, user.password)) {
                req.session.loggedUser = user;
                res.redirect('/');
            } else {
                res.render('pages/auth/login', {
                    navLocation: req.__('auth.title'),
                    title: req.__('auth.pageTitle'),
                    loginError: req.__('auth.errors.incorrect')
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}