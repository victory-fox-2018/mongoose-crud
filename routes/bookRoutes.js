const router = require('express').Router();
const BookController = require('../controllers/bookController');

router.get('/', BookController.findAll);
router.get('/:id', BookController.findById);
router.post('/', BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.remove);

module.exports = router;