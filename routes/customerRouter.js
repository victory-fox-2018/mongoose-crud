'use strict'

const express = require('express')
const router = express.Router()
const customerController = require('./../controllers/customerController')


router.post('/createOne', customerController.createOne)
router.get('/findAll', customerController.findAll)
router.post('/updateOne/:id', customerController.updateOne)
router.post('/deleteOne/:id', customerController.deleteOne)

module.exports = router 