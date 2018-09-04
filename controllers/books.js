const Book = require('../models/books')
const ObjectId = require('mongodb').ObjectId

class Controller {
  static add(req, res){
    Book.create(req.body, function (err, book) {
      if (err) {
        res.status(500).json({message:err})
      } else {
        res.status(200).json({message:"Success", data:book})
      } // ...
    });
  }

  static read(req, res) {
    Book.find()
    .then( books => {
      res.status(200).json({message:"Success", data:books})
    })
    .catch( err => {
      res.status(500).json({message:err.message})
    })
  }

  static update(req, res) {
    Book.findByIdAndUpdate(ObjectId(req.params.id), req.body, function(err, doc) {
      console.log("masuk2");
      if(err) {
        res.status(500).json({message: err.message})
      } else {
        res.status(200).json({message:"Success Update"})
      }
    })
  }

  static delete(req, res) {
    Book.findByIdAndRemove(ObjectId(req.params.id), req.body, function(err, doc) {
      if(err) {
        res.status(500).json({message: err.message})
      } else {
        res.status(200).json({message:"Data has been deleted"})
      }
    })
  }
}

module.exports = Controller
