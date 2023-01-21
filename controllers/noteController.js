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
                title: req.__('note.form.add.pageTitle'),
                mode: 'create',
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
                    title: req.__('note.form.edit.pageTitle'),
                    mode: 'edit',
                    action: '/notes/edit',
                    navLocation: req.__('note.title'),
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
            navLocation: req.__('note.title'),
        });
    })
}

exports.showNoteAdd = (req, res, next) => {
    res.render('pages/notes/form', {
        note: { creation: convertDate() },
        oldNote: {},
        title: req.__('note.form.add.pageTitle'),
        mode: 'create',
        action: '/notes/add',
        navLocation: req.__('note.title'),
        errors: []
    });
}

exports.showNoteEdit = (req, res, next) => {
    NoteRepository.getNoteById(req.params.id)
    .then(note => {
        res.render('pages/notes/form', { 
            note: note,
            oldNote: note,
            title: req.__('note.form.edit.pageTitle'),
            mode: 'edit',
            action: '/notes/edit',
            navLocation: req.__('note.title'),
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
            title: req.__('note.form.details.pageTitle'),
            mode: 'details',
            action: '',
            navLocation: req.__('note.title'),
            errors: [] 
        });
    })
}