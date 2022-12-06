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


exports.createUsernote = async (body) => {
    const usernote = await Usernote.findOne({where: { user_id: body.user, note_id: body.note } });

    if(usernote != null)
        return this.updateUsernote(usernote.dataValues._id, body);

    return await Usernote.create({
        user_id: body.user,
        note_id: body.note,
        write: (body.write == 'on')? 'true' : 'false',
        delete: (body.delete == 'on')? 'true' : 'false'
    });
};

exports.updateUsernote = (id, body) => {
    body._id = id;
    body.write = (body.write == 'on')? 'true' : 'false';
    body.delete = (body.delete == 'on')? 'true' : 'false';

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