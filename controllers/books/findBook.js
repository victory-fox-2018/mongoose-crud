const books = require('../../models/books')

const get = (req,res)=>{
    let id = req.params._id


    books.findOne({id})
    .then( book =>{
        res.status(200).send({msg:'found your book',book})                 
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}