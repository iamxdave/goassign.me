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
                title: 'New user',
                mode: 'create',
                btn: 'Add',
                action: '/users/add',
                navLocation: 'User',
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
                    user: user,
                    title: 'Edit user',
                    mode: 'edit',
                    btn: 'Confirm',
                    action: '/users/edit',
                    navLocation: 'User', 
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
        navLocation: 'User',
        errors: [] 
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
            navLocation: 'User',
            errors: [] 
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
            navLocation: 'User',
            errors: [] 
        });
    })
}