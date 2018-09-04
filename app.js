const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_mongoose-CRUD')
const port = 3000

const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open', function(){
    // we're conntected

    console.log('Database is connect to mongoo')
})
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.listen(port, function(){
    console.log(`Server running port at ${port}`);
})