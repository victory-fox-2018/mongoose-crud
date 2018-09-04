const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDb');
});


const indexRoutes = require('./routes/indexRoutes');
const bookRoutes = require('./routes/bookRoutes');
const customerRoutes = require('./routes/customerRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/', indexRoutes);
app.use('/books', bookRoutes);
app.use('/customers', customerRoutes);
app.use('/transactions', transactionRoutes);

app.listen(3000, () => console.log('Connected to server...'));