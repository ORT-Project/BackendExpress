const router = require('express').Router(); // module express et fonction Router

const { getAllBookshelf, getBookshelfById, createBookshelf, updateBookshelf, deleteBookshelf } = require('../controllers/bookshelfController')

router.get('/', getAllBookshelf)
router.get('/:id', getBookshelfById)
router.post('/create', createBookshelf)
router.patch('/update/:id', updateBookshelf)
router.delete('/delete/:id', deleteBookshelf)

module.exports = router;
