var express = require('express');
var router = express.Router();
const { addBook, findAllBook, updateBook, deleteBook } = require('../controllers/bookController');

router.get('/', findAllBook)
router.post('/', addBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router;
