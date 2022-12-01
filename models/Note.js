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
        allowNull: false
    },
});

module.exports = Note;