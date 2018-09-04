const ObjectId = require('mongodb').ObjectID;
const Customer = require('../models/customer');

module.exports = {
  findAll: function(req,res) {
    Customer.find()
      .then(customers => {
        res.status(200).json({
          message: 'find all success!',
          data: customers
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  },
  create: function(req,res) {
    let newCustomer = new Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })

    newCustomer.save((err, customer) => {
      if (!err) {
        res.status(201).json({
          message: 'new customer created successfully!',
          data: customer
        })
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  },
  remove: function(req,res) {
    let id = {
      _id: ObjectId(req.params.id)
    }
    Customer.deleteOne(id, function (err) {
      if(!err) {
        res.status(200).json({
          message: 'customer deleted successfully!'
        })
      } else {
        res.status(500).json(err);
      }
    });
  },
  update: function(req,res) {
    let id = {
      _id: ObjectId(req.params.id)
    }
    let objUpdate = req.body
    Customer.updateOne(id, objUpdate, function(err, data) {
      if (!err) {
        res.status(200).json({
          message: 'customer data updated!'
        })
      } else {
        res.status(500).json(err);
      }
    });
  }
}
