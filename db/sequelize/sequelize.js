const { Sequelize } = require('sequelize');

require('dotenv').config();

const rootPassword = process.env.MYSQL_ROOT_PASSWORD;
const port = process.env.MYSQL_PORT;

const sequelize = new Sequelize('goassign-me', 'root', rootPassword, {
    dialect: 'mysql',
    host: 'localhost',
    port: port
});

module.exports = sequelize;