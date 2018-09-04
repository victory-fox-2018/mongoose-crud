'use strict'

const express = require('express')
const router = express.Router();
const BookController = require('../controllers/book')

//get list of books
router.get('/',(req,res)=>{
    BookController.getAllData(req,res)
})

// insert data 
router.post('/',(req,res)=>{
    BookController.insertData(req,res);
})

module.exports = router