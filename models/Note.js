const { Sequelize } = require('sequelize');
const sequelize = require('../db/sequelize/sequelize');

const Note = sequelize.define('Note', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "note.errors.title.notEmpty"
            },
            len: {
                args: [5,80],
                msg: "note.errors.title.len"
            }
        }
    },
    creation: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    implementation: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "note.errors.description.notEmpty"
            },
            len: {
                args: [5,400],
                msg: "note.errors.description.len"
            }
        }
    },
});

module.exports = Note;