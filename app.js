require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = require('express')()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

let database = process.env.DATABASE_DEV
if(process.env.NODE_ENV === 'test') {
    database = process.env.DATABASE_TEST
} else if(process.env.NODE_ENV === 'prod') {
    database = process.env.DATABASE_PROD
}
mongoose.connect(database, { useNewUrlParser: true })

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Running in ${port}`)
})