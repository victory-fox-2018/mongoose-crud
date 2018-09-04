var express = require('express');
var router = express.Router();
var Controllers = require('../Controllers/books')


/* GET users listing. */
router.post('/adding', Controllers.add)
router.get('/', Controllers.read)
router.put('/update/:id', Controllers.update)
router.delete('/delete/:id', Controllers.delete)

module.exports = router;
