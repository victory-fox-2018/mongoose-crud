const router = require('express').Router()
const {insertBook, readBook, updateBook, deleteBook} = require('../controllers/book_controller');
router.post('/',insertBook)
      .get('/', readBook)
      .put('/:id', updateBook)
      .delete('/:id', deleteBook)

module.exports = router