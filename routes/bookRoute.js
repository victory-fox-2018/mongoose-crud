const router = require('express').Router()
const { addBook, displayAllBooks, displaySingleBook, updateBook, deleteBook } = require('../controllers/bookController')

router.post('/add', addBook)
router.get('/display', displayAllBooks)
router.post('/display/:id', displaySingleBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router