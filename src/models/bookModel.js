const { DataTypes } = require('sequelize')
const client = require('../db/connection')
const bookshelf = require('./bookshelfModel')

const books = client.define('book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    bookshelf_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: bookshelf,
            key: 'id'
        }
    }
})

module.exports = books
