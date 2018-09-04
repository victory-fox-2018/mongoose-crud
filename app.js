const express = require('express')
const mongoose = require('mongoose');

const bookRoute = require('./routes/bookRoute')
const customerRoute = require('./routes/customerRoute')
const transactionRoute = require('./routes/transactionRoute')

const app = express()

app.use(express.urlencoded({ extended:false }))
app.use(express.json())

mongoose.connect('mongodb://localhost/mongoose-crud-db', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connected...');
});

app.use('/books', bookRoute)
app.use('/customers', customerRoute)
app.use('/transactions', transactionRoute)

app.listen(3000, () => {
    console.log('running on port 3000');
})