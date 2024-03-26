const swaggerFile = require('./middleware/swagger-doc.json');
const swaggerUI = require('swagger-ui-express')
const express = require('express')
const server = express()
const bookRoutes = require('./routes/bookRoutes')
const bookshelfRoutes = require('./routes/bookshelfRoutes')
const port = Number(process.env.PORT || 3000)
const apiLink = '/api'

console.log('http://127.0.0.1:3000/')

server.listen(port)

server.use(express.json())
server.set('json spaces', 2)

server.use(apiLink + '/books', bookRoutes)
server.use(apiLink + '/bookshelf', bookshelfRoutes)

server.get('/', (req, res) => {
    res.send('API')
})

server.use('/doc', swaggerUI.serve)
server.get('/doc', swaggerUI.setup(swaggerFile))

module.exports = server
