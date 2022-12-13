const { Sequelize } = require('sequelize');

require('dotenv').config();

const rootPassword = process.env.MYSQL_ROOT_PASSWORD;
const port = process.env.MYSQL_PORT;
console.log(port);
console.log(rootPassword);
const sequelize = new Sequelize('goassign-me', 'root', rootPassword, {
    dialect: 'mysql',
    host: 'localhost',
    port: port
});

module.exports = sequelize;