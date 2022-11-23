exports.showUsers = (req, res, next) => {
    res.render('pages/users/list', { navLocation: 'user' });
}

exports.showUserAdd = (req, res, next) => {
    res.render('pages/users/add', { navLocation: 'user' });
}

exports.showUserEdit = (req, res, next) => {
    res.render('pages/users/edit', { navLocation: 'user' });
}

exports.showUserDetails = (req, res, next) => {
    res.render('pages/users/details', { navLocation: 'user' });
}