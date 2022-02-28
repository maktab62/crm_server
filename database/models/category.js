const { DataTypes } = require('sequelize');
const sequelize = require("../connection");
const CreatedAdmin = require("./admin");
const UpdatedAdmin = require("./admin");

const Category = sequelize.define('category', {
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
    setMenu: {
        type: DataTypes.BOOLEAN,
        default: true
    },
    setIndex: {
        type: DataTypes.BOOLEAN,
        default: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        len: [2, 100],
        validate: {
            notNull: {
                msg: 'Please enter category name'
            },
            notEmpty: {
                args: [true],
                msg: 'name could not be empty'
            }
        }
    },
    linkToPage: {
        type: DataTypes.STRING(30),
        allowNull: false,
        len: [2, 300],
        validate: {
            notNull: {
                msg: 'Please enter category link to page'
            },
            notEmpty: {
                args: [true],
                msg: 'category link to page could not be empty'
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
    tableName: "categories",
    timestamps: true
});

Category.belongsTo(Category, {
    as: 'subCategory',
    foreignKey: 'categoryId'
});

CreatedAdmin.hasMany(Category, {
    foreignKey: 'createdId'
});

UpdatedAdmin.hasMany(Category, {
    foreignKey: 'updatedId'
});

module.exports = Category;