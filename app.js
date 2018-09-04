//Things requir
var express = require('express');
var app = express();
const books = require('./routes/books');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');
const port = 3000;
const mongoose   = require('mongoose');

//Connecting do Mongoose
const url = 'mongodb://localhost:27017/new-library';
mongoose.connect(url,{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected');
});

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port,()=>{
  console.log(`application is on port:${port}`);
  });

app.use('/books',books);
app.use('/customers',customers);
app.use('/transactions',transactions);