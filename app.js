const express = require('express');
const app = express();
const mongoose = require('mongoose');

const indexRoute = require('./routes/index');
const bookRoute = require('./routes/books');
const customerRoute = require('./routes/customer');
const transactionRoute = require('./routes/transaction');

mongoose.connect('mongodb://imam82:imam82@ds145072.mlab.com:45072/mongoose_crud', {
  useNewUrlParser: true
});

const db = mongoose.connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', function() {
    console.log('Connected to MongooseDB');
  })
 
app
  .use(express.urlencoded({extended:false}))
  .use(express.json())
  .use('/', indexRoute)
  .use('/books', bookRoute)
  .use('/customers', customerRoute)
  .use('/transactions', transactionRoute)
  .listen(3003, () => {
    console.log(`Server running on port 3003`);
  })