const Transaction = require('../models/Transaction')
const ObjectId = require('mongodb').ObjectId

class Controller {
  
  static show(req, res) {
    Transaction.find({}, (err, data) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        res.status(200).json({transactions: data})
      }
    })
  }
  
  static create(req, res) {
    let newTransaction = new Transaction({
      member: req.body.member,
      days: req.body.days,
      fine: req.body.fine,
      booklist: req.body.booklist
    })
    
    newTransaction.save((err, data) => {
      if (err) {
        res.status(500).json({error: err.message})
      }else {
        res.status(201).json({message: 'Data created!', data: data})
      }
    })
  }
  
  static update(req, res) {
    let obj = req.body
    
    Transaction.update({_id: ObjectId(req.params.id)}, obj, (err, r) => {
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
    Transaction.deleteOne({_id: ObjectId(req.params.id)}, (err, r) => {
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