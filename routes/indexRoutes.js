const router = require('express').Router();
const IndexController = require('../controllers/indexController');

router.get('/', IndexController.index);

module.exports = router;