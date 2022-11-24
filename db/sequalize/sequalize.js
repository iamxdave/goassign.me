const Sequalize = require('sequelize');

require('dotenv').config();

const rootPassword = process.env.MYSQL_ROOT_PASSWORD;

const sequelize = new Sequalize('goassign-me', 'root', rootPassword, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;