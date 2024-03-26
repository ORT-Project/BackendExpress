const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const client = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.HOST,
    dialect: process.env.DB_DATABASE,
    define: {
        schema: 'public',
        timestamps: false,
        freezeTableName: true
    }
});

module.exports = client
