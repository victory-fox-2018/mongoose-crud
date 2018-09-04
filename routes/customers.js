'use strict'

const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/customer')

// get all data
router.get('/',(req,res)=>{
    CustomerController.getAllData(req,res);
})

// insert data 
router.post('/',(req,res)=>{
    CustomerController.insertData(req,res);
})

// update data
router.put('/edit/:id',(req,res)=>{
    CustomerController.updateData(req,res);
})

// delete data
router.delete('/delete/:id',(req,res)=>{
    CustomerController.deleteData(req,res);
})

module.exports = router