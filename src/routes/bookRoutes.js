const router = require('express').Router();

const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/bookController')

router.get('/', getAllBooks);
router.get('/:id', getBookById)
router.post('/create', createBook)
router.patch('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router;
