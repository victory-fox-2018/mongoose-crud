'use strict'

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/library-mongoose');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open',function(){
//     console.log('connected to MongoDb');
// })

const Book = require('../models/book');

class BookController{

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

    static getAllData(req,res){

        Book.find({})
            .then(data =>{
                res.status(200).json({data : data});
            })
            .catch(err =>{
                res.status(500).json({msg : err});
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
