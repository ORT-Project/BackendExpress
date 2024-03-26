const router = require('express').Router();

const { getAllBookshelf, getBookshelfById, createBookshelf, updateBookshelf } = require('../controllers/bookshelfController')

router.get('/', getAllBookshelf)
router.get('/:id', getBookshelfById)
router.post('/create', createBookshelf)
router.patch('/update/:id', updateBookshelf)

module.exports = router;
