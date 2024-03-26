const { DataTypes } = require('sequelize')
const client = require('../db/connection')

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
    }
})

module.exports = books
