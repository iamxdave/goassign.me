const User = require('../models/User');
const Note = require('../models/Note');
const Usernote = require('../models/Usernote');
const noteSchema = require('../models/validation/Note');

const convertDate = require('../utils/convertDate');

exports.getNotes = () => {
    return Note.findAll();
}

exports.getNoteById = (id) => {
    return Note.findByPk(id, 
        {
            include: [{
                model: Usernote,
                as: 'usernotes',
                include: [{
                    model: User,
                    as: 'user'
                }]
            }]
        });
};

exports.createNote = (body) => {
    const val = noteSchema.validate(body, { abortEarly: false });

    if(val.error)
        return Promise.reject(val.error);
        
    return Note.create({
        title: body.title,
        creation: convertDate(),
        implementation: body.implementation,
        description: body.description
    });
};

exports.updateNote = (id, body) => {
    return Note.update(body, {where: {_id: id}});
};

exports.deleteNote = (id) => {
    return Note.destroy({
        where: {_id: id}
    });
};