const books = require('../../models/books')

const put = (req,res)=>{
    let id = req.params._id
    books.update(
    { id },
    { $set:
        {
        category : req.body.category,
        author: req.body.author,
        title : req.body.title,
        stock: req.body.stock
        }
    })
    .then(book => {
        res.status(201).send({msg:'success updated book',book})
    })
    .catch(err => res.status(400).send(err))
         
      
}

module.exports = {put}
