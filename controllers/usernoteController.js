exports.showUsernotes = (req, res, next) => {
    res.render('pages/usernotes/list', { navLocation: 'usernote' });
}

exports.showUsernoteAdd = (req, res, next) => {
    res.render('pages/usernotes/add', { navLocation: 'usernote' });
}

exports.showUsernoteEdit = (req, res, next) => {
    res.render('pages/usernotes/edit', { navLocation: 'usernote' });
}

exports.showUsernoteDetails = (req, res, next) => {
    res.render('pages/usernotes/details', { navLocation: 'usernote' });
}