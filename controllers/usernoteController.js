const NoteRepository = require('../repositories/NoteRepository');
const UserRepository = require('../repositories/UserRepository');
const UsernoteRepository = require('../repositories/UsernoteRepository');


exports.addUsernote = (req, res, next) => {
    const data = { ...req.body };
    
    const e = [
        (data.user == 'default')? { name: 'user' } : '',
        (data.note == 'default')? { name: 'note' } : ''
    ];

    if(data.note == 'default' || data.user == 'default') {
        
        data.write = (data.write == 'on')? true : false;
        data.delete = (data.delete == 'on')? true : false;
        let allUsers, allNotes;
        
        UserRepository.getUsers()
            .then(users => {
                allUsers = users;
                return NoteRepository.getNotes();
            })
            .then(notes => {
                allNotes = notes;
                console.log(data);
                res.render('pages/usernotes/form', {
                    usernote: data,
                    title: req.__('usernote.form.add.pageTitle'),
                    allUsers: allUsers,
                    allNotes: allNotes,
                    mode: 'create',
                    action: '/usernotes/add',
                    navLocation: req.__('usernote.title'),
                    errors: e
                });
            })
    } else {
        UsernoteRepository.createUsernote(data)
            .then(result => res.redirect('/usernotes'));
    };
    
    
};

exports.updateUsernote = (req, res, next) => {
    const data = { ...req.body };
    
    const e = [
        (data.user == 'default')? { name: 'user' } : '',
        (data.note == 'default')? { name: 'note' } : ''
    ];

    if(data.note == 'default' || data.user == 'default') {
        
        data.write = (data.write == 'on')? true : false;
        data.delete = (data.delete == 'on')? true : false;

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
                            usernote: data,
                            title: req.__('usernote.form.edit.pageTitle'),
                            allUsers: allUsers,
                            allNotes: allNotes,
                            mode: 'edit',
                            action: '/usernotes/edit',
                            navLocation: req.__('usernote.title'),
                            errors: e
                        });
                    })
            })
    } else {
        UsernoteRepository.updateUsernote(data._id, data)
            .then(result => res.redirect('/usernotes'));
    };
    
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
            navLocation: req.__('usernote.title'),
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
                title: req.__('usernote.form.add.pageTitle'),
                allUsers: allUsers,
                allNotes: allNotes,
                mode: 'create',
                action: '/usernotes/add',
                navLocation: req.__('usernote.title'),
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
                        title: req.__('usernote.form.edit.pageTitle'),
                        allUsers: allUsers,
                        allNotes: allNotes,
                        mode: 'edit',
                        action: '/usernotes/edit',
                        navLocation: req.__('usernote.title'),
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
                        title: req.__('usernote.form.details.pageTitle'),
                        allUsers: allUsers,
                        allNotes: allNotes,
                        mode: 'details',
                        action: '',
                        navLocation: req.__('usernote.title'),
                        errors: []
                    });
                });
    });
}