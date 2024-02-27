const router = require('express').Router();

const { getAllBooks, getBooksById } = require('../controllers/bookController')

router.get('/', getAllBooks);
router.get('/:id', getBooksById)

module.exports = router;