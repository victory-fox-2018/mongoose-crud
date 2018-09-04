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

// update data
router.put('/edit/:id',(req,res)=>{

    // console.log('test')
    // res.send(req.params.id)
    BookController.updateData(req,res);
    
})

// delete data
router.delete('/delete/:id',(req,res)=>{
    BookController.deleteData(req,res);
})

module.exports = router