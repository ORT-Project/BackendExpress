const getConfigSwagger = require('./middleware/swagger.js')
const swaggerUI = require('swagger-ui-express')
const express = require('express')
const server = express()
const bookRoutes = require('./routes/bookRoutes')
const port = Number(process.env.PORT || 3000)

console.log('http://127.0.0.1:8081/')

server.listen(port)

server.use(express.json())
server.set('json spaces', 2)

server.use('/books', bookRoutes)

server.use('/doc', swaggerUI.serve)
server.get('/doc', swaggerUI.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = server