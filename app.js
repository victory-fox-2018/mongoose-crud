const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/library';
const port = process.env.PORT || 4000
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',routes)

app.listen(port, ()=> console.log(`running on port ${port}`))

  
mongoose.connect(url,{ useNewUrlParser: true })
.then(()=>{
  
    console.log("Connected successfully to server");
})
 .catch (err => res.send(err))

