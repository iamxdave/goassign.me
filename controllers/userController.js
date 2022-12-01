const UserRepository = require('../repositories/UserRepository');

exports.addUser = (req, res, next) => {
    const data = { ...req.body };
    UserRepository.createUser(data)
        .then(result => {
            res.redirect('/users');
        });
};

exports.updateUser = (req, res, next) => {
    const data = { ...req.body };
    UserRepository.updateUser(data._id, data)
        .then(result => res.redirect('/users'))
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
            navLocation: 'User' 
        });
    })
}

exports.showUserAdd = (req, res, next) => {
    res.render('pages/users/form', {
        user: {},
        title: 'New user',
        mode: 'create',
        btn: 'Add',
        action: '/users/add',
        navLocation: 'User' 
    });
}

exports.showUserEdit = (req, res, next) => {
    UserRepository.getUserById(req.params.id)
    .then(user => {
        res.render('pages/users/form', { 
            user: user,
            title: 'Edit user',
            mode: 'edit',
            btn: 'Confirm',
            action: '/users/edit',
            navLocation: 'User' 
        });
    })
}

exports.showUserDetails = (req, res, next) => {
    UserRepository.getUserById(req.params.id)
    .then(user => {
        res.render('pages/users/form', { 
            user: user,
            title: 'User details',
            mode: 'details',
            action: '',
            navLocation: 'User' 
        });
    })
}