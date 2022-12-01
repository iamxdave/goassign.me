const UsernoteRepository = require('../repositories/UsernoteRepository');

exports.getUsernotes = (req, res, next) => {
    
    UsernoteRepository.getUsernotes()
    .then(usernote => {
        res.status(200).json(usernote);
    })
    .catch(err => {
        console.log(err);
    });
};

exports.getUsernoteById = (req, res, next) => {
    
    const id = req.params.id;
    
    UsernoteRepository.getUsernoteById(id)
    .then(usernote => {
        if(!usernote)
            res.status(404).json({
                message: `Usernote with id ${id} not found`
            })
        else
            res.status(200).json(usernote);
    })
};

exports.createUsernote = (req, res, next) => {
    
    UsernoteRepository.createUsernote(req.body)
    .then(usernote => {
        res.status(201).json(usernote);
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};

exports.updateUsernote = (req, res, next) => {
    
    const id = req.params.id;

    UsernoteRepository.updateUsernote(id, req.body)
    .then(usernote => {
        res.status(200).json({message: 'Usernote updated', usernote: usernote});
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};

exports.deleteUsernote = (req, res, next) => {
    
    const id = req.params.id;

    UsernoteRepository.deleteUsernote(id)
    .then(usernote => {
        res.status(200).json({ message: 'Removed usernote', usernote: usernote});
    })
    .catch(err => {
        if(!err.statusCode)
            err.statusCode = 500;
        next(err);
    })
};