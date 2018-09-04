'use strict'

const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/transaction');

// get all data
router.get('/',(req,res)=>{
    TransactionController.getAllData(req,res);
})

// insert all data
router.post('/',(req,res)=>{
    TransactionController.insertData(req,res);
})

// delete data
router.delete('/delete/:id',(req,res)=>{
    TransactionController.deleteData(req,res);
})

module.exports = router