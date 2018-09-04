const books = require('../../models/books')

const remove = (req,res)=>{
    let id = req.params.id
    
    books.findOneAndRemove({_id:id})
    .then(book =>{
        res.status(200).send({msg:'success delete',book})
    })
    .catch(err => res.status(400).send(err))  
}

module.exports = {remove}