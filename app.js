const express = require('express')
const app = express()
const mongoose = require('mongoose')
const RouterBook = require('./routes/routeBook')
const RouterCostumer = require('./routes/routerCustomer')
const RouterTransaction = require('./routes/routerTransaction')
mongoose.connect('mongodb://localhost/db_mongoose-CRUD', {useNewUrlParser : true})
const port = 9000

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open', function(){
    // we're conntected

    console.log('Database is connect to mongoo')
})
app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.use('/books', RouterBook)
app.use('/costumer', RouterCostumer)
app.use('/transaction', RouterTransaction)


app.listen(port, function(){
    console.log(`Server running port at ${port}`);
})