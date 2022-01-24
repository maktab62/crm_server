const { DataTypes } = require('sequelize');
const sequelize = require("../connection");

const Admin = sequelize.define('admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        default: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
        len: [5, 30],
        validate: {
            notNull: {
                msg: 'Please enter your username'
            },
            notEmpty: {
                args: [true],
                msg: 'Username could not be empty'
            }
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter your password'
            },
            notEmpty: {
                args: [true],
                msg: 'password could not be empty'
            }
        }
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        len: [5, 100],
        validate: {
            notNull: {
                msg: 'Please enter your name'
            },
            notEmpty: {
                args: [true],
                msg: 'name could not be empty'
            }
        }
    },
    family: {
        type: DataTypes.STRING(100),
        allowNull: false,
        len: [5, 100],
        validate: {
            notNull: {
                msg: 'Please enter your family'
            },
            notEmpty: {
                args: [true],
                msg: 'family could not be empty'
            }
        }
    },
    email: {
        type: DataTypes.STRING(100),
        validate: {
            isEmail: {
                args: [true],
                msg: 'Please enter your email correctly'
            }
        }
    },
    mobile: {
        type: DataTypes.STRING(20)
    },
    image: {
        type: DataTypes.STRING(100)
    },
    body: {
        type: DataTypes.TEXT
    }
}, {
    tableName: "admins",
    timestamps: true
});


module.exports = Admin;