'use strict'

const Book = require('../models/book');
const ObjectId = require('mongodb').ObjectId;

class BookController{

    // insert individual data
    static insertData(req,res){

        const newBook = new Book({
            isbn : req.body['isbn'],
            title : req.body['title'],
            author : req.body['author'],
            category : req.body['category'],
            stock : Number(req.body['stock']) 
        })
        newBook.save()
            .then(book =>{
                res.status(200).json({msg : 'Data has been saved'});
                // console.log('Data has been saved');
            })
            .catch(err =>{
                // console.log('err');
                res.status(500).json({msg : err});
            })
    }

    // get all data
    static getAllData(req,res){

        Book.find({})
            .then(data =>{
                res.status(200).json({data : data});
            })
            .catch(err =>{
                res.status(500).json({msg : err});
            })            
    }

    // update data 
    static updateData(req,res){
        let updateId = ObjectId(req.params.id);
        
        Book.findByIdAndUpdate({_id : updateId},{
                isbn : req.body['isbn'],
                title : req.body['title'], 
                author : req.body['author'], 
                category : req.body['category'], 
                stock : Number(req.body['stock'])},(err,data)=>{
                    if(!err){
                        res.status(200).json({msg : 'Data has been updated'});     
                    }else{
                        res.status(500).json({msg:err});     
                    }
                })
            // .then(row =>{
            //     res.status(200).json({msg : 'Data has been updated'});
            // })
            // .catch(err =>{
            //     res.status(500).json({msg:err});
            // })
    }

    // delete data
    static deleteData(req,res){
        let deleteId = ObjectId(req.params.id) 

        Book.deleteOne({_id: deleteId})
            .then(row =>{
                res.status(200).json({msg : 'Data has been deleted'});
            })
            .catch(err =>{
                res.status(500).json({msg :err});
            })
    }

}

// testing
// let obj = {
//     "isbn" : "978-1-891830-77-8",
//     "title" : "Every Girl is the End of the world for Me",
//     "author" : "Jeffrey Brown",
//     "category" : "Mature (16+)",
//     "stock" : 5
// }
// BookController.insertData(obj)
// BookController.getAllData();

module.exports = BookController
