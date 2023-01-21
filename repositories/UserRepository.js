const User = require('../models/User');
const Note = require('../models/Note');
const Usernote = require('../models/Usernote');
const auth = require('../utils/auth');

exports.getUsers = () => {
    return User.findAll();
}

exports.getUserById = (id) => {
    return User.findByPk(id,
        {
            include: [{
                model: Usernote,
                as: 'usernotes',
                include: [{
                    model: Note,
                    as: 'note'
                }]
            }]
        });
};

exports.getUserByEmail = (email) => {
    return User.findOne({
        where: { email: email},
        include: [{
            model: Usernote,
            as: 'usernotes',
            include: [{
                model: Note,
                as: 'note'
            }]
        }]
    })
}

exports.createUser = (body) => {
    return User.create({
        username: body.username,
        password: body.password,
        email: body.email,
        firstname: body.firstname,
        lastname: body.lastname
    })
}

exports.updateUser = (id, body) => {
    return User.update(body, {where: {_id: id}});
};

exports.deleteUser = (id) => {
    return User.destroy({
        where: {_id: id}
    });
};