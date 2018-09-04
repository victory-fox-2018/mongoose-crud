'use strict'

const express = require('express')
const router = express.Router()
const bookController = require('./../controllers/bookController')


router.post('/createOne', bookController.createOne)
router.get('/findAll', bookController.findAll)
router.post('/updateOne/:id', bookController.updateOne)
router.post('/deleteOne/:id', bookController.deleteOne)

module.exports = router 