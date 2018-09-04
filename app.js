var express = require('express');
var mongoose = require('mongoose');

var indexRouter = require('./routes/indexRoute');
var booksRouter = require('./routes/bookRoute');
var customersRouter = require('./routes/customerRoute');
var transactionsRouter = require('./routes/transactionRoute');

var app = express();

mongoose.connect('mongodb://localhost:27017/library', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connect to mongodb success!')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/books', booksRouter);
//app.use('/customers', customersRouter);
//app.use('/transactions', transactionsRouter);

app.listen(3000, () => {
  console.log('listening on port 3000!')
})
