const express = require('express')
const RouterBook = require('./routes/book')
const RouterCustomer = require('./routes/customer')
const RouterTransaction = require('./routes/transaction')
const app     = express()

var mongoose = require('mongoose');
var db       = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/library');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongo connected')
});

const port    = 3000

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use('/books', RouterBook)
app.use('/customers', RouterCustomer)
app.use('/transactions', RouterTransaction)

app.use(express.urlencoded({extended : false}))
app.use(express.json())


app.listen(port, () => {
    console.log('Listening on port ', port)
})