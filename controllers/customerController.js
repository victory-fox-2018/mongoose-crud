const Customer    = require('../models/customer')
const ObjId       = require('mongodb').ObjectId

module.exports = {
    findAll: function(req,res){
        Customer.find() 
        .then( data => {
            res.status(200).json({
                message : 'Data customers',
                customers : data
            })
        })
        .catch( err => {
            res.status(200).json({
                message : 'Data not found'
            }) 
        })
      
    },

    findBy: function(req,res){
        let name = req.params.name
        Customer.find({ "name": { $regex: '.*' + name + '.*' } },
        function(err,data){
            if (!err) {
                res.status(200).json({
                    message : `searching from name : ${name}`,
                    customers : data
                })
            } else {
                res.status(500).json({
                    error : err.message
                }) 
            }
       });
    },

    insert: function(req,res){
        var array = [
            {   
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            }, 
        ];

        Customer.create(array, function (err, candies) {
            if (!err) {
                res.status(200).json({
                    message : `insert customer success`
                })
            } else {
                res.status(500).json({
                    error : err.message
                }) 
            }
        });
    },

    update: function(req,res){

        Customer.findByIdAndUpdate(req.params.id, 
            { 
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            }, 
        ((err,data) => {
            if (!err) {
                res.status(200).json({
                    message : `Update customers success`,
                })
            } else {
                res.status(500).json({
                    error : err.message
                }) 
            }
        }))
    },

    remove: function(req,res){
        Customer.remove(
            { _id: ObjId(req.params.id) },
        function (err, status) {
            if(!err){
                res.status(200).json({
                    message : `delete customers success`,
                    status : status
                })
            } else {
                res.status(500).json({
                    error : err.message
                })
            }
        });
    }
}