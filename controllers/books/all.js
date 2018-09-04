const books = require('../../models/books')

const get = (req,res)=>{
       
    books.find()
    .then(book => {
        res.status(200).send({msg:'success', data:book})
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}