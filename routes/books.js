const router = require('express').Router();
const Book = require('../controllers/books');

router.get('/', Book.read);
router.post('/', Book.insert);
router.put('/:id', Book.update);
router.delete('/:id', Book.erase);

module.exports = router;