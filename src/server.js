const router = require('express').Router()
const swaggerUI = require('swagger-ui-express')
const express = require('express')
const app = express()
const client = require('./db/connection.js')

client.connect()
const request = async () => {
    const query = {
        text: 'SELECT * FROM "book"'
    }
    const res = await client.query(query);

    for (const r of res.rows) {
        console.log(r)
    }
}

request()

const getConfigSwagger = require('./middleware/swagger.js')


const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http//%s:%s', host, port)
})

app.use('/doc', swaggerUI.serve)
app.get('/doc', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = router