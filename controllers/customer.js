'use strict'

const Customer = require('../models/customer');
const ObjectId = require('mongodb').ObjectId;

class CustomerController {

    // insert data
    static insertData(req,res){
        const newCustomer = new Customer({
            name : req.body['name'],
            memberid : req.body['memberid'],
            address : req.body['address'],
            zipcode : req.body['zipcode'],
            phone : req.body['phone']
        })
        newCustomer.save()
            .then(row =>{
                res.status(200).json({msg : 'Data has been saved'});
            })
            .catch(err =>{
                res.status(500).json({msg : err});
            })
    }

    // get all data
    static getAllData(req,res){
        Customer.find({})
            .then(data =>{
                res.status(200).json({data : data});
            })
            .catch(err =>{
                res.status(500).json({msg : err});
            })
    }

    // update data
    static updateData(req,res){
        let updateId = ObjectId(req.params.id)

        Customer.findByIdAndUpdate({_id : updateId},{
            name : req.body['name'],
            memberid : req.body['memberid'],
            address : req.body['address'],
            zipcode : req.body['zipcode'],
            phone: req.body['phone']
        },(err,row)=>{
            if(!err){
                res.status(200).json({msg : 'Data has been updated'});     
            }else{
                res.status(500).json({msg:err});     
            }
        })
    }

    // delete data
    static deleteData(req,res){
        let deleteId = ObjectId(req.params.id);

        Customer.deleteOne({_id : deleteId})
            .then(row =>{
                res.status(200).json({msg : 'Data has been deleted'});
            })
            .catch(err =>{
                res.status(500).json({msg : err});
            })
    }
}

module.exports = CustomerController