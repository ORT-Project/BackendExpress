const client = require('../db/connection')

const BookConstructor = function (book) {
    this.id = book.id
    this.title = book.title
    this.author = book.author
    this.type = book.type
}

getAllBooks = (result) => {
    client.query('SELECT * From "book"', async (err, res) => {
        result(err, res.rows)
    })
}

getBooksById = (id, result) => {
    client.query('SELECT * FROM "book" WHERE "id" = $1', [id], async (err, res) => {
        result(err, res.rows)
    })
}

module.exports = {
    BookConstructor,
    getAllBooks,
    getBooksById
}