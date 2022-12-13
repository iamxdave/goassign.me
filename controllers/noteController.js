const NoteRepository = require('../repositories/NoteRepository');
const convertDate = require('../utils/convertDate');

exports.addNote = (req, res, next) => {
    const data = { ...req.body };
    data.implementation = (data.implementation == '')? null : data.implementation;
    
    NoteRepository.createNote(data)
        .then(result => res.redirect('/notes'))
        .catch(err => {
            data.creation = convertDate();
            res.render('pages/notes/form', {
                note: data,
                oldNote: {},
                title: 'New note',
                mode: 'create',
                btn: 'Add',
                action: '/notes/add',
                navLocation: 'Note',
                errors: err.errors
            });
        });
};

exports.updateNote = (req, res, next) => {
    const data = { ...req.body };
    data.implementation = (data.implementation == '')? null : data.implementation;
    
    NoteRepository.updateNote(data._id, data)
        .then(result => res.redirect('/notes'))
        .catch(err => {
            NoteRepository.getNoteById(data._id)
            .then(note => {
                res.render('pages/notes/form', { 
                    note: data,
                    oldNote: note,
                    title: 'Edit note',
                    mode: 'edit',
                    btn: 'Confirm',
                    action: '/notes/edit',
                    navLocation: 'Note',
                    errors: err.errors
                });
            })
        });
};

exports.deleteNote = (req, res, next) => {
    NoteRepository.deleteNote(req.params.id)
        .then(result => res.redirect('/notes'))
};


exports.showNotes = (req, res, next) => {
    NoteRepository.getNotes()
    .then(notes => {
        res.render('pages/notes/list', {
            notes: notes,
            navLocation: 'Note' 
        });
    })
}

exports.showNoteAdd = (req, res, next) => {
    res.render('pages/notes/form', {
        note: { creation: convertDate() },
        oldNote: {},
        title: 'New note',
        mode: 'create',
        btn: 'Add',
        action: '/notes/add',
        navLocation: 'Note',
        errors: []
    });
}

exports.showNoteEdit = (req, res, next) => {
    NoteRepository.getNoteById(req.params.id)
    .then(note => {
        res.render('pages/notes/form', { 
            note: note,
            oldNote: note,
            title: 'Edit note',
            mode: 'edit',
            btn: 'Confirm',
            action: '/notes/edit',
            navLocation: 'Note',
            errors: []
        });
    })
}

exports.showNoteDetails = (req, res, next) => {
    NoteRepository.getNoteById(req.params.id)
    .then(note => {
        res.render('pages/notes/form', { 
            note: note,
            oldNote: note,
            title: 'Note details',
            mode: 'details',
            action: '',
            navLocation: 'Note',
            errors: [] 
        });
    })
}