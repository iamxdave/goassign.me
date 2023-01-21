const UserRepository = require('../repositories/UserRepository');

exports.addUser = (req, res, next) => {
    const data = { ...req.body };

    UserRepository.createUser(data)
        .then(result => res.redirect('/users'))
        .catch(err => {
            err.errors.forEach(e => {
                if(e.path.includes('username') && e.type == 'unique violation') {
                    e.message = "Username is already used"
                }
                if(e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Email is already used"
                }
            })
            res.render('pages/users/form', {
                user: data,
                oldUser: {},
                title: req.__('user.form.add.pageTitle'),
                mode: 'create',
                action: '/users/add',
                navLocation: req.__('user.title'),
                errors: err.errors
            });
        });
};

exports.updateUser = (req, res, next) => {
    const data = { ...req.body };
    if(data.password == '')
        data.password = UserRepository.getUserById(data._id).password;
        
    UserRepository.updateUser(data._id, data)
        .then(result => res.redirect('/users'))
        .catch(err => {
            err.errors.forEach(e => {
                if(e.path.includes('username') && e.type == 'unique violation') {
                    e.message = "Username is already used"
                }
                if(e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Email is already used"
                }
            })
           UserRepository.getUserById(data._id)
            .then(user => {
                res.render('pages/users/form', { 
                    user: data,
                    oldUser: user,
                    title: req.__('user.form.edit.pageTitle'),
                    mode: 'edit',
                    action: '/users/edit',
                    navLocation: req.__('user.title'),
                    errors: err.errors
                });
            })
        });
};

exports.deleteUser = (req, res, next) => {
    UserRepository.deleteUser(req.params.id)
        .then(result => res.redirect('/users'))
};

exports.showUsers = (req, res, next) => {
    UserRepository.getUsers()
    .then(users => {
        res.render('pages/users/list', {
            users: users,
            navLocation: req.__('user.title'),
        });
    })
}

exports.showUserAdd = (req, res, next) => {
    res.render('pages/users/form', {
        user: {},
        oldUser: {},
        title: req.__('user.form.add.pageTitle'),
        mode: 'create',
        action: '/users/add',
        navLocation: req.__('user.title'),
        errors: [] 
    });
}

exports.showUserEdit = (req, res, next) => {
    UserRepository.getUserById(req.params.id)
    .then(user => {
        res.render('pages/users/form', { 
            user: user,
            oldUser: user,
            title: req.__('user.form.edit.pageTitle'),
            mode: 'edit',
            action: '/users/edit',
            navLocation: req.__('user.title'),
            errors: [] 
        });
    })
}

exports.showUserDetails = (req, res, next) => {
    UserRepository.getUserById(req.params.id)
    .then(user => {
        res.render('pages/users/form', { 
            user: user,
            oldUser: user,
            title: req.__('user.form.details.pageTitle'),
            mode: 'details',
            action: '',
            navLocation: req.__('user.title'),
            errors: [] 
        });
    })
}