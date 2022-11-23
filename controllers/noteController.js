exports.showNotes = (req, res, next) => {
    res.render('pages/notes/list', { navLocation: 'note' });
}

exports.showNoteAdd = (req, res, next) => {
    res.render('pages/notes/add', { navLocation: 'note' });
}

exports.showNoteEdit = (req, res, next) => {
    res.render('pages/notes/edit', { navLocation: 'note' });
}

exports.showNoteDetails = (req, res, next) => {
    res.render('pages/notes/details', { navLocation: 'note' });
}