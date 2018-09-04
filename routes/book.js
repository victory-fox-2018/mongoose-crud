const router = require('express').Router()
const { getAll, getBook, createBook, deleteBook, updateBook } = require('../controllers/book')

router.get('/', getAll)
router.post('/', createBook)
router.get('/:id', getBook)
router.delete(`/:id`, deleteBook)
router.put('/:id', updateBook)

module.exports = router
