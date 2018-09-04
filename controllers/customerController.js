const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Customer= require('./../models/customer')
const objId= require('mongodb').ObjectID


module.exports = {
    
    createOne: function(req,res){
        const newCustomer = new Customer ({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })

        newCustomer.save(function (err) {
            if (!err) {
                res.status(200).json({
                    msg: "New data has been added"
                })
            }else {
                res.status(500).json({
                    msg: err.message
                })
            }
          });
    },

    findAll: function(req,res){
        Customer.find(function(err,data) {
            if (!err) {
                res.status(200).json({
                    data: data
                })
            }else {
                res.status(500).json({
                    msg: err.message
                })
            }    
        })
    },

    updateOne: function(req,res){
        let newUpdate= {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }
        
        Customer.updateOne({_id: objId(req.params.id)},newUpdate,function(err,data){
            if (!err) {
                res.status(200).json({
                    msg: "Data has been updated",
                    data: data
                })
            }else {
                res.status(500).json({
                    msg: err.message
                })
            }  
        })
    },

    deleteOne: function(req,res){
        Customer.deleteOne({_id: objId(req.params.id)}, function (err) {
            if (!err) {
                res.status(200).json({
                    msg: "Data has been deleted"              
                })
            }else {
                res.status(500).json({
                    msg: err.message
                })
            }  
        })

    }

}
