const router = require('express').Router()
const {insert, read, update, remove} = require('../controllers/trans_controller');

router.post('/', insert)
      .get('/', read)
      .put('/:id', update)
      .delete('/:id', remove)

module.exports = router