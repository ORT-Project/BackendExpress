const { DataTypes } = require('sequelize')
const client = require('../db/connection')

const bookshelf = client.define('bookshelf', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    number: {
        type: DataTypes.INTEGER
    },
    stage: {
        type: DataTypes.INTEGER
    }
})

module.exports = bookshelf
