const bookModel = require('../models/bookModel')

const getAllBooks = async (request, response) => {
    try {
        const data = await bookModel.findAll()
        response.status(200).send(data)
    } catch (err) {
        response.status(500).send({
            message: err.message || 'Une erreur est survenue en essayant de récupérer la table des livres'
        })
    }
}

const getBookById = async (request, response) => {
    try {
        const data = await bookModel.findByPk(request.params.id)
        response.status(200).send(data)
    } catch (err) {
        response.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la récupération d\'un livre'
        })
    }
}

const createBook = async (request, response) => {
    try {
        const newBook =  await bookModel.create(request.body)
        const createdBook = await bookModel.findByPk(newBook.id)
        const formattedBook = {
            id: createdBook.id,
            title: createdBook.title,
            author: createdBook.author,
            type: createdBook.type
        }

        response.status(201).send({
            message: 'New book successfully created !', formattedBook
        })
    } catch (err) {
        response.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la création d\'un livre'
        })
    }
}

const updateBook = async (request, response) => {
    try {
        const book = await bookModel.findByPk(request.params.id);

        if (!book) {
            return response.status(404).json({ message: 'Book not found' });
        }

        await book.update(request.body);
        const updatedBook = await bookModel.findByPk(request.params.id);

        response.status(200).send({
            message: 'Updated book successfully', updatedBook
        });
    } catch (error) {
        response.status(500).send({
            message: error.message || 'Erreur survenue lors de la modification d\'un livre.'
        });
    }
}

const deleteBook = async (request, response) => {
    try {
        const book = await bookModel.findByPk(request.params.id);

        if (!book) {
            return response.status(404).json({ message: 'Book not found' });
        }

        await book.destroy(request.body)
        response.status(200).send('Book successfully deleted');
    } catch (error) {
        response.status(500).send({
            message: error.message || 'Erreur survenue lors de la suppression d\'un livre.'
        });
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}
