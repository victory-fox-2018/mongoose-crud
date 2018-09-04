require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = require('express')()
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./routes')
const port = process.env.PORT || 3000

let database = process.env.DATABASE_DEV
if(process.env.NODE_ENV === 'test') {
    database = process.env.DATABASE_TEST
} else if(process.env.NODE_ENV === 'prod') {
    database = process.env.DATABASE_PROD
}
mongoose.connect(database, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is Connecting')
});

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', router)

app.listen(port, () => {
    console.log(`Running in ${port}`)
})