const express = require('express');
const router = express.Router();

const Book = require('../controllers/book')

router.get('/', Book.show)
router.post('/', Book.create)

router.put('/:id', Book.update)

router.delete('/:id', Book.remove)

module.exports = router;