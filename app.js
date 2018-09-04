const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const routes = require('./routes')
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/mongoose-crud');

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',routes)

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log(`> connect to mongoDB`);
});

app.listen(port, () => {
    console.log(`> listening to port ${port}`);
})