const Customer = require('../models/Customer')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    getAll: function(req,res){
        Customer.find()
            .then(customers =>{
                res.status(200).json({
                    message: `Success Find All Customers`,
                    data: customers
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    },

    getCustomer: function(req,res){
        if(req.params.id.length !== 24){
            res.status(404).json({
                message: "Customer Not Found"
            })
        }else{
            Customer.findById(ObjectId(req.params.id))
                .then(customer =>{
                    if(customer){
                        res.status(200).json({
                            message: "Found It",
                            data: customer
                        })
                    }else{
                        res.status(404).json({
                            message: "Customer Not Found"
                        })
                    }
                })
                .catch(err =>{
                    res.status(500).json({
                        message: err.message
                    })
                })
        }
    },

    createCustomer: function(req,res){
        let newCustomer = new Customer(req.body)
        // res.send(newCustomer)
        newCustomer.save()
               .then(customer =>{
                   res.status(200).json({
                       message: "Sucess Insert New Customer",
                       data: customer
                   })
               })
               .catch(err =>{
                   res.status(500).json({
                       message: err.message
                   })
               })
    },

    deleteCustomer: function(req,res){
        Customer.deleteOne({ _id: { $eq: ObjectId(req.params.id)} })
            .then(() =>{
                res.status(200).json({
                    message: "Sucessfully Delete"
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    },

    updateCustomer: function(req,res){
        Customer.findByIdAndUpdate(ObjectId(req.params.id), req.body)
            .then(updatedCustomer =>{
                res.status(200).json({
                    message: "Sucessfully Update",
                    data: updatedCustomer
                })
            })
            .catch(err =>{
                res.status(500).json({
                    message: err.message
                })
            })
    }
}