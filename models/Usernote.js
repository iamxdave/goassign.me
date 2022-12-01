const { Sequelize } = require('sequelize');
const sequelize = require('../db/sequelize/sequelize');

const Usernote = sequelize.define('Usernote', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    write: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    delete: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    note_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Usernote;