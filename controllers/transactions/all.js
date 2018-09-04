const transactions = require('../../models/transactions')

const get = (req,res)=>{
       
    transactions.find()
    .populate('booklist')
    .populate('member')
    .then(transaction => {
        res.status(200).send({msg:'success', transaction})
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}