const NoteRepository = require('../repositories/NoteRepository');
const UserRepository = require('../repositories/UserRepository');
const UsernoteRepository = require('../repositories/UsernoteRepository');


exports.addUsernote = (req, res, next) => {
    const data = { ...req.body };
    if(data.note == 'default' || data.user == 'default') {
        const val = [
            (data.user == 'default')? { name: 'user' } : '',
            (data.note == 'default')? { name: 'note' } : ''
        ];

        let allUsers, allNotes;
        UserRepository.getUsers()
            .then(users => {
                allUsers = users;
                return NoteRepository.getNotes();
            })
            .then(notes => {
                allNotes = notes;
                res.render('pages/usernotes/form', {
                    usernote: data,
                    title: 'Add user permissions',
                    allUsers: allUsers,
                    allNotes: allNotes,
                    mode: 'create',
                    btn: 'Add',
                    action: '/usernotes/add',
                    navLocation: 'Usernote', 
                    errors: val
                });
            })
    } else {
        UsernoteRepository.createUsernote(data)
            .then(result => res.redirect('/usernotes'))
            .catch(err => {
                let allUsers, allNotes;
                UserRepository.getUsers()
                    .then(users => {
                        allUsers = users;
                        return NoteRepository.getNotes();
                    })
                    .then(notes => {
                        allNotes = notes;
                        res.render('pages/usernotes/form', {
                            usernote: {},
                            title: 'Add user permissions',
                            allUsers: allUsers,
                            allNotes: allNotes,
                            mode: 'create',
                            btn: 'Add',
                            action: '/usernotes/add',
                            navLocation: 'Usernote', 
                            errors: err.errors
                        });
                    })
            });
    }
};

exports.updateUsernote = (req, res, next) => {
    const data = { ...req.body };
    if(data.note == 'default' || data.user == 'default') {
        const val = [
            (data.user == 'default')? { name: 'user' } : '',
            (data.note == 'default')? { name: 'note' } : ''
        ];

        let allUsers, allNotes;
        UserRepository.getUsers()
            .then(users => {
                allUsers = users;
                return NoteRepository.getNotes();
            })
            .then(notes => {
                allNotes = notes;
                UsernoteRepository.getUsernoteById(data._id)
                    .then(usernote => {
                res.render('pages/usernotes/form', {
                    usernote: usernote,
                    title: 'Edit usernote',
                    allUsers: allUsers,
                    allNotes: allNotes,
                    mode: 'edit',
                    btn: 'Confirm',
                    action: '/usernotes/edit',
                    navLocation: 'Usernote', 
                    errors: val
                });
            })
        })
    } else {
        UsernoteRepository.updateUsernote(data._id, data)
            .then(result => res.redirect('/usernotes'))
            .catch(err => {
                let allUsers, allNotes;
                UserRepository.getUsers()
                    .then(users => {
                        allUsers = users;
                        return NoteRepository.getNotes();
                    })
                    .then(notes => {
                        allNotes = notes;
                        UsernoteRepository.getUsernoteById(data._id)
                            .then(usernote => {
                                res.render('pages/usernotes/form', { 
                                    usernote: usernote,
                                    title: 'Edit usernote',
                                    allUsers: allUsers,
                                    allNotes: allNotes,
                                    mode: 'edit',
                                    btn: 'Confirm',
                                    action: '/usernotes/edit',
                                    navLocation: 'Usernote',
                                    errors: err.errors
                                });
                            });
                    });
            });
    }
};

exports.deleteUsernote = (req, res, next) => {
    UsernoteRepository.deleteUsernote(req.params.id)
        .then(result => res.redirect('/usernotes'))
};

exports.showUsernotes = (req, res, next) => {
    UsernoteRepository.getUsernotes()
    .then(usernotes => {
        res.render('pages/usernotes/list', {
            usernotes: usernotes,
            navLocation: 'Usernote'
        });
    })
}

exports.showUsernoteAdd = (req, res, next) => {

    let allUsers, allNotes;
    UserRepository.getUsers()
        .then(users => {
            allUsers = users;
            return NoteRepository.getNotes();
        })
        .then(notes => {
            allNotes = notes;
            res.render('pages/usernotes/form', {
                usernote: {},
                title: 'Add user permissions',
                allUsers: allUsers,
                allNotes: allNotes,
                mode: 'create',
                btn: 'Add',
                action: '/usernotes/add',
                navLocation: 'Usernote',
                errors: [] 
            });
        })
}

exports.showUsernoteEdit = (req, res, next) => {
    let allUsers, allNotes;
    UserRepository.getUsers()
        .then(users => {
            allUsers = users;
            return NoteRepository.getNotes();
        })
        .then(notes => {
            allNotes = notes;
            UsernoteRepository.getUsernoteById(req.params.id)
                .then(usernote => {
                    res.render('pages/usernotes/form', { 
                        usernote: usernote,
                        title: 'Edit usernote',
                        allUsers: allUsers,
                        allNotes: allNotes,
                        mode: 'edit',
                        btn: 'Confirm',
                        action: '/usernotes/edit',
                        navLocation: 'Usernote',
                        errors: [] 
                    });
                });
        });
    
}

exports.showUsernoteDetails = (req, res, next) => {
    let allUsers, allNotes;
    UserRepository.getUsers()
        .then(users => {
            allUsers = users;
            return NoteRepository.getNotes();
        })
        .then(notes => {
            allNotes = notes;
            UsernoteRepository.getUsernoteById(req.params.id)
                .then(usernote => {
                    res.render('pages/usernotes/form', { 
                        usernote: usernote,
                        title: 'Usernote details',
                        allUsers: allUsers,
                        allNotes: allNotes,
                        mode: 'details',
                        action: '',
                        navLocation: 'Usernote',
                        errors: []
                    });
                });
    });
}