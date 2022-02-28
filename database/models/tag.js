const { DataTypes } = require('sequelize');
const sequelize = require("../connection");
const CreatedAdmin = require("./admin");
const UpdatedAdmin = require("./admin");

const Tag = sequelize.define('tag', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        default: true
    },
    priority: {
        type: DataTypes.INTEGER,
        default: null
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        len: [2, 100],
        validate: {
            notNull: {
                msg: 'Please enter tag name'
            },
            notEmpty: {
                args: [true],
                msg: 'name could not be empty'
            }
        }
    },
    color: {
        type: DataTypes.STRING(50),
        default: null
    },
    metaTitle: {
        type: DataTypes.STRING(50),
        default: null
    },
    metaKeywords: {
        type: DataTypes.STRING(255),
        default: null
    },
    metaDescription: {
        type: DataTypes.STRING(255),
        default: null
    },
    smallImage: {
        type: DataTypes.STRING(255),
        default: null
    },
    bigImage: {
        type: DataTypes.STRING(255),
        default: null
    },
    bannerImage: {
        type: DataTypes.STRING(255),
        default: null
    },
    iconImage: {
        type: DataTypes.STRING(255),
        default: null
    },
    body: {
        type: DataTypes.TEXT
    }
}, {
    tableName: "tags",
    timestamps: true,
    paranoid: true
});

Tag.belongsTo(Tag, {
    as: "subTag",
    foreignKey: 'tagId'
});

CreatedAdmin.hasMany(Tag, {
    foreignKey: 'createdId'
});

UpdatedAdmin.hasMany(Tag, {
    foreignKey: 'updatedId'
});

module.exports = Tag;