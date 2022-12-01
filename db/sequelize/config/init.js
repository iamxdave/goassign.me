const sequelize = require('../sequelize');

const User = require('../../../models/User');
const Note = require('../../../models/Note');
const Usernote = require('../../../models/Usernote');

const convertDate = require('../../../utils/convertDate');

module.exports = () => {
    User.hasMany(Usernote, {as: 'usernotes', foreignKey: {name: 'user_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Usernote.belongsTo(User, {as: 'user', foreignKey: {name: 'user_id', allowNull: false}});
    Note.hasMany(Usernote, {as: 'usernotes', foreignKey: {name: 'note_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Usernote.belongsTo(Note, {as: 'note', foreignKey: {name: 'note_id', allowNull: false}});

    let allUsers, allNotes;
    return sequelize
        .sync({force: true})
        .then( () => {
            return User.findAll();
        })
        .then(users => {
            if(!users || users.length == 0) {
                return User.bulkCreate([
                    {username: 'username1', password: 'pass1', email: 'email1', firstname: 'firstname1', lastname: 'lastname1'},
                    {username: 'username2', password: 'pass2', email: 'email2', firstname: 'firstname2', lastname: 'lastname2'},
                    {username: 'username3', password: 'pass3', email: 'email3', firstname: 'firstname3', lastname: 'lastname3'},
                ])
                .then( () => {
                    return User.findAll();
                });
            } else {
                return users;
            }
        })
        .then( users => {
            allUsers = users;
            return Note.findAll();
        })
        .then( notes => {
            if(!notes || notes.length == 0) {
                return Note.bulkCreate([
                    {title: 'first note title', creation: convertDate(), description: 'this is first note description and its not as important as it should be'},
                    {title: 'second note title', creation: convertDate(), implementation: convertDate(3), description: 'this is second note description and its not as important as it should be'},
                ])
                .then( () => {
                    return Note.findAll();
                });
            } else {
                return notes;
            }
        })
        .then( notes => {
            allNotes = notes;
            return Usernote.findAll();
        })
        .then( usernotes => {
            if(!usernotes || usernotes.length == 0) {
                return Usernote.bulkCreate([
                    {user_id: allUsers[0]._id, note_id: allNotes[0]._id, write: true, delete: false},
                    {user_id: allUsers[1]._id, note_id: allNotes[0]._id, write: false, delete: false},
                    {user_id: allUsers[0]._id, note_id: allNotes[1]._id, write: true, delete: true}, 
                ]);
            } else {
                return usernotes;
            }
        });
}