const { Sequelize } = require('sequelize');
const sequelize = require('../db/sequelize/sequelize');
const auth = require('../utils/auth');

const User = sequelize.define('User', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "user.errors.username.notEmpty"
            },
            len: {
                args: [2,30],
                msg: "user.errors.username.len"
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "user.errors.password.notEmpty"
            }
        },
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "user.errors.email.notEmpty"
            },
            len: {
                args: [5,30],
                msg: "user.errors.email.len"
            },
            isEmail: {
                msg: "user.errors.email.isEmail"
            }
        }
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "user.errors.firstname.notEmpty"
            },
            len: {
                args: [2,30],
                msg: "user.errors.firstname.len"
            },
            isFirstLetterUppercase(value) {
               if(value.length != 0 && value[0] != value[0].toUpperCase())
                throw new Error("user.errors.firstname.isFirstLetterUppercased");
            }
        }
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        isUppercase: true,
        validate: {
            notEmpty: {
                msg: "user.errors.lastname.notEmpty"
            },
            len: {
                args: [2,30],
                msg: "user.errors.lastname.len"
            },
            isFirstLetterUppercase(value) {
                if(value.length != 0 && value[0] != value[0].toUpperCase())
                throw new Error('user.errors.lastname.isFirstLetterUppercased');
            }
        }
    }
});

User.beforeCreate((user, options) => {
    user.password = auth.hashPassword(user.password);
});

module.exports = User;