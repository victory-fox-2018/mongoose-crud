const transactions = require('../../models/transactions')

const remove = (req,res)=>{
    let id = req.params._id
    
    transactions.deleteOne({id})
    .then(transaction =>{
        res.status(200).send({msg:'success delete',transaction})
    })
    .catch(err => res.status(400).send(err))  
}

module.exports = {remove}