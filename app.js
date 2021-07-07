const mongoose = require('mongoose')
const express = require('express')
const routes = require('./routes/')
const app = express()
const db = mongoose.connection

mongoose.connect('mongodb://localhost:27017/library')
db.on('error', console.error.bind(console, 'connectiion error:'))
db.once('open', function(){ console.log(`Database Successfully connect`) })

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/',routes)

app.listen(3000)