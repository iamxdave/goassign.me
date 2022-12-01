const User = require('../models/User');
const Note = require('../models/Note');
const Usernote = require('../models/Usernote');
const { Sequelize } = require('sequelize');

exports.getUsernotes = () => {
    return Usernote.findAll({include: [
        {
            model: User,
            as: 'user'
        },
        {
            model: Note,
            as: 'note'
        }
    ]});
}

exports.getUsernoteById = (id) => {
    return Usernote.findByPk(id, {include: [
        {
            model: User,
            as: 'user'
        },
        {
            model: Note,
            as: 'note'
        }]
    });
};

exports.createUsernote = (body) => {
    return Usernote.create({
        user_id: body.user_id,
        note_id: body.note_id,
        write: body.write,
        delete: body.delete
    });
};

exports.updateUsernote = (id, body) => {
    return Usernote.update(body, {where: {_id: id}});
};

exports.deleteUsernote = (id) => {
    return Usernote.destroy({
        where: {_id: id}
    });
};

exports.deleteManyUsernotes = (ids) => {
    return Usernote.find({_id: {[Sequelize.prototype.in]: ids}});
};