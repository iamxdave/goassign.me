const { Sequelize } = require('sequelize');
const sequelize = require('../db/sequelize/sequelize');

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
                msg: "Username is required",
            },
            len: {
                args: [2,30],
                msg: "Username should contain 2-30 characters"
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Password is required",
            },
            len: {
                args: [7,42],
                msg: "Password should contain 7-42 characters"
            },
            hasValidPasswordSyntax(value) {
                if(value.length != 0) {
                    if(!value.match('.*[a-zA-Z].*'))
                        throw new Error('Password should contain at least one letter');
                    if(!value.match('.*[a-z].*'))
                        throw new Error('Password should contain at least one lowercase letter');
                    if(!value.match('.*[A-Z].*'))
                        throw new Error('Password should contain at least one uppercase letter');
                    if(!value.match('.*[0-9].*'))
                        throw new Error('Password should contain at least one number');
                }
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Email is required"
            },
            len: {
                args: [5,30],
                msg: "Email should contain 5-30 characters"
            },
            isEmail: {
                msg: "Field should contain valid email address"
            }
        }
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Firstname is required"
            },
            len: {
                args: [2,30],
                msg: "Firstname should contain 2-30 characters"
            },
            isFirstLetterUppercase(value) {
               if(value.length != 0 && value[0] != value[0].toUpperCase())
                throw new Error('First letter should be uppercased');
            }
        }
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        isUppercase: true,
        validate: {
            notEmpty: {
                msg: "Lastname  is required"
            },
            len: {
                args: [2,30],
                msg: "Lastname should contain 2-30 characters"
            },
            isFirstLetterUppercase(value) {
                if(value.length != 0 && value[0] != value[0].toUpperCase())
                throw new Error('First letter should be uppercased');
            }
        }
    }
});

module.exports = User;