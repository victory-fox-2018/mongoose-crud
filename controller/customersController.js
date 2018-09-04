const Customer = require('../models/customersModel');
const mongodb = require('mongodb');


module.exports = {
  findAll : function(req,res){
    Customer.find({},(err,users)=>{
      if(!err){
        res.status(200).json({
          data : users
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
    Customer.create(obj, function (err, instance) {
      if(!err){
        res.status(201).json({
          msg : "success adding data"
        });
      }
      else{
        res.status(500).json({
          msg : "failed updating data"
        });
      }
    });
  },

  remove : function(req,res){
    Customer.deleteOne({_id: new mongodb.ObjectID(req.params.id)},(err)=>{
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
    Customer.updateOne({_id: new mongodb.ObjectID(req.params.id)},req.body,(err)=>{
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