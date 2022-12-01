const NoteRepository = require('../repositories/NoteRepository');
const UserRepository = require('../repositories/UserRepository');
const UsernoteRepository = require('../repositories/UsernoteRepository');


exports.addUsernote = (req, res, next) => {
    const data = { ...req.body };
    UsernoteRepository.createUsernote(data)
        .then(result => {
            res.redirect('/usernotes');
        });
};

exports.updateUsernote = (req, res, next) => {
    const data = { ...req.body };
    UsernoteRepository.updateUsernote(data._id, data)
        .then(result => res.redirect('/usernotes'))
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
                navLocation: 'Usernote' 
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
                        navLocation: 'Usernote' 
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
                        navLocation: 'Usernote' 
                    });
                });
    });
}