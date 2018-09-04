const router = require('express').Router()
const { createOne, getAll, getOne, updateOne, deleteOne } = require('../controllers/customerController')

router.post('/', createOne)
router.get('/', getAll)
router.get('/:id', getOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)

module.exports = router