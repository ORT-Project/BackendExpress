const bookshelfModel = require('../models/bookshelfModel')
const bookModel = require("../models/bookModel");

const getAllBookshelf = async (request, response) => {
    try {
        const data = await bookshelfModel.findAll()
        response.status(200).send(data)
    } catch (err) {
        response.status(500).send({
            message: err.message || 'Une erreur est survenue en essayant de récupérer la table des bibliothèques'
        })
    }
}

// Fusion avec getAllBookshelf
const getBookshelfById = async (request, response) => {
    try {
        const data = await bookshelfModel.findByPk(request.params.id)
        response.status(200).send(data)
    } catch (err) {
        response.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la récupération d\'une bibliothèque'
        })
    }
}

const createBookshelf = async (request, response) => {
    try {
        const newBookshelf =  await bookshelfModel.create(request.body)
        const createdBookshelf = await bookshelfModel.findByPk(newBookshelf.id)

        response.status(201).send({
            message: 'New book successfully created !', createdBookshelf
        })
    } catch (err) {
        response.status(500).send({
            message: err.message || 'Une erreur est survenue lors de la création d\'une bibliothèque'
        })
    }
}

const updateBookshelf = async (request, response) => {
    try {
        const bookshelf = await bookshelfModel.findByPk(request.params.id);

        if (!bookshelf) {
            return response.status(404).json({ message: 'Bookshelf not found' });
        }

        await bookshelf.update(request.body);
        const updatedBookshelf = await bookshelfModel.findByPk(request.params.id);

        response.status(200).send({
            message: 'Updated bookshelf successfully', updatedBookshelf
        });
    } catch (error) {
        response.status(500).send({
            message: error.message || 'Erreur survenue lors de la modification d\'une bibliothèque.'
        });
    }
}

const deleteBookshelf = async (request, response) => {
    try {
        const bookshelf = await bookModel.findByPk(request.params.id);

        if (!bookshelf) {
            return response.status(404).json({ message: 'Bookshelf not found' });
        }

        await bookshelf.destroy(request.body)
        response.status(200).send('Bookshelf successfully deleted');
    } catch (error) {
        response.status(500).send({
            message: error.message || 'Erreur survenue lors de la suppression d\'une bibliothèque.'
        });
    }
}

module.exports = {
    getAllBookshelf,
    getBookshelfById,
    createBookshelf,
    updateBookshelf,
    deleteBookshelf
}
