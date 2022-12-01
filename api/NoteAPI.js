const NoteRepository = require('../repositories/NoteRepository');

exports.getNotes = (req, res, next) => {
    
    NoteRepository.getNotes()
    .then(notes => {
        res.status(200).json(notes);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getNoteById = (req, res, next) => {
    
    const id = req.params.id;
    
    NoteRepository.getNoteById(id)
    .then(note => {
        if(!note)
            res.status(404).json({
                message: `Note with id ${id} not found`
            })
        else
            res.status(200).json(note);
    })
};

exports.createNote = (req, res, next) => {
    NoteRepository.createNote(req.body)
    .then(note => {
        res.status(201).json(note);
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};

exports.updateNote = (req, res, next) => {
    
    const id = req.params.id;

    NoteRepository.updateNote(id, req.body)
    .then(note => {
        res.status(200).json({message: 'Note updated', note: note});
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};

exports.deleteNote = (req, res, next) => {
    
    const id = req.params.id;

    NoteRepository.deleteNote(id)
    .then(note => {
        res.status(200).json({ message: 'Removed note', note: note});
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};