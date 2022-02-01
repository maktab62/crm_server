const { DataTypes } = require('sequelize');
const sequelize = require("../connection");
const CreatedAdmin = require("./admin");

const Log = sequelize.define('log', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body: {
        type: DataTypes.TEXT
    }
}, {
    tableName: "logs",
    timestamps: true,
    updatedAt: false
});

CreatedAdmin.hasMany(Log, {
    foreignKey: 'createdId'
});

module.exports = Log;