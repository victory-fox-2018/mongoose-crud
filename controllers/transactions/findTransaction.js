const transactions = require('../../models/transactions')

const get = (req,res)=>{
    let id = req.params.id


    transactions.findOne({_id:id})
    .populate('booklist')
    .populate('member')
    .then( transaction =>{
        res.status(200).send({msg:'found your transaction',transaction})                 
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}