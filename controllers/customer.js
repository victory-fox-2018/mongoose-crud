const Customer = require('../models/Customer')
const ObjectId = require('mongodb').ObjectId

class Controller {
  
  static show(req, res) {
    Customer.find({}, (err, customers) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        res.status(200).json({customers: customers})
      }
    })
  }
  
  static create(req, res) {
    const newCustomer = new Customer({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
    
    newCustomer.save((err, data) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        res.status(201).json({message: 'Data created!', data: data})
      }
    })
  }
  
  static update(req, res) {
    let data = {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }
    
    Customer.update({_id: ObjectId(req.params.id)}, data, (err, r) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        if (r.n == 1) {
          res.status(200).json({message: `Data ${req.params.id} updated!`})
        }else {
          res.status(404).json({error: 'Data not found!'})
        }
      }
    })
  }
  
  static remove(req, res) {
    Customer.deleteOne({_id: ObjectId(req.params.id)}, (err, r) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        if (r.n == 1) {
          res.status(200).json({message: `Data ${req.params.id} deleted`})
        }else {
          res.status(404).json({error: 'Data not found!'})
        }
      }
    })
  }
  
}

module.exports = Controller