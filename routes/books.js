var express = require('express');
var router = express.Router();
var { addBook, deleteBook, getAllBook, getOneBook, updateBook } = require('../controllers/book')

/* GET users listing. */
router.get('/',getAllBook)
router.get('/:id',getOneBook)

router.post('/',addBook)
router.delete('/:id',deleteBook)
router.put('/:id',updateBook)

module.exports = router;
