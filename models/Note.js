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
                msg: "Title is required"
            },
            len: {
                args: [5,80],
                msg: "Title should contain 5-80 characters"
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
                msg: "Description is required"
            },
            len: {
                args: [5,400],
                msg: "Description should contain 5-400 characters"
            }
        }
    },
});

module.exports = Note;