const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')

router.get('/', (req, res) => {
  bookController.showAll(req, res)
})
router.get('/:id', (req, res) => {
  bookController.showOne(req, res)
})
router.post('/', (req, res) => {
  bookController.add(req, res)
})
router.put('/:id', (req, res) => {
  bookController.edit(req, res)
})
router.delete('/:id', (req, res) => {
  bookController.destroy(req, res)
})

module.exports = router;