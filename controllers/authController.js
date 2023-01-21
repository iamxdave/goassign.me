const UserRepository = require('../repositories/UserRepository');
const auth = require('../utils/auth');
exports.login = (req, res, next) => {
    const email= req.body.email;
    const password = req.body.password;
    UserRepository.getUserByEmail(email)
        .then(user => {
            if(!user) {
                res.render('index', {
                    navLocation: '',
                    loginError: 'Incorrect email address or password'
                })
            } else if(auth.comparePasswords(password, user.password)) {
                req.session.loggedUser = user;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: 'Incorrect email address or password'
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