const mongodb = require('mongodb');
const Transaction = require('../models/transactionsModel');


module.exports = {
  findAll : function(req,res){
    Transaction.find({})
    .populate('booklist')
    .populate('member')
    .exec((err,data)=>{
      if(!err){
        res.status(200).json({
          data : data
        });
      }
      else{
        res.status(500).json({
          msg : "error connecting to database"
        });
      }
    });
  },

  create : function(req,res){
    const obj = req.body;
    Transaction.create(obj, function (err, instance) {
      if(!err){
        res.status(201).json({
          msg : "success adding data",
          data : instance
        });
      }
      else{
        res.status(500).json({
          msg : "failed adding data"
        });
      }
    });
  },

  remove : function(req,res){
    Transaction.deleteOne({_id: new mongodb.ObjectID(req.params.id)},(err)=>{
      if(!err){
        console.log(`Removed the document with the id a equal to ${req.params.id}`);
        res.status(200).json({
          msg : `success deleting with id : ${req.params.id}`
        });
      }
      else{
        res.status(500).json({
          msg : "failed deleting from database"
        });
      }
    });
  },

  update : function(req,res){
    const data = req.body;
    Transaction.updateOne({_id: new mongodb.ObjectID(req.params.id)},req.body,(err)=>{
      if(!err){
        res.status(200).json({
          msg : `Updated the document with the id a equal to ${req.params.id}`,
        });
      }
      else{
        res.status(500).json({
          msg : "failed updating to database"
        });
      }
    });
  }
};