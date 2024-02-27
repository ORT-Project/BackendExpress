const bookModel = require('../models/bookModel')

getAllBooks = (request, response) => {
    bookModel.getAllBooks((error, data) => {
        if (error) {
            response.status(500).send({
                message:
                    error.message || 'Une erreur est survenue en essayant de récupérer la table des livres'
            })
        } else {
            response.send(data)
        }
    })
}

getBooksById = (request, response) => {
    bookModel.getBooksById(request.params.id, (error, data) => {
        if (error) {
            response.status(500).send({
                message: error.message || 'Une erreur est survenue lors de la récupération d\'un livre'
            });
        } else {
            response.status(200).send(data);
        }
    });
}

module.exports = {
    getAllBooks,
    getBooksById
}