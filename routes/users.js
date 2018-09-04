var express = require('express');
var router = express.Router();
const { createBook, getAllBook, updateBook, deleteBook } = require('../controllers/bookController')

router.post('/', createBook);
router.get('/', getAllBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook)

module.exports = router;
