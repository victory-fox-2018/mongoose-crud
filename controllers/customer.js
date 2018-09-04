const Customer = require('../models/customer');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectId;
mongoose.connect('mongoodb://localhost:27017/library2', {
  useNewUrlParser: true
});

class Controller {
  static insert(req, res) {
    Customer
      .create(req.body)
      .then(customer => {
        res.status(200).json({
          message: `'${req.body.name}' has been insert into customers`,
          data: customer
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static read(req, res) {
    Customer
      .find({})
      .then(customers => {
        res.status(200).json({
          message: 'Customers has been suucessfully loaded',
          data: customers
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static update(req, res) {
    const id = ObjectId(req.params.id);
    const condition = ({_id: id});
    let newData = {};
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);
    for(let i = 0; i < keys.length; i++) {
      newData[keys[i]] = values[i];
    }  
  
    Customer
      .update(condition, newData)
      .then(customer => {
        res.status(200).json({
          message: 'Customer has been updated'
        });
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static erase(req, res) {
    const id = ObjectId(req.params.id);
    const condition = ({_id: id});
    Customer
      .deleteOne(condition)
      .then(data => {
        res.status(201).json({
          message: `Customer has been deleted`
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

}

module.exports = Controller;