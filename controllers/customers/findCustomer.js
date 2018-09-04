const customers = require('../../models/customers')

const get = (req,res)=>{
    let id = req.params.id


    customers.findOne({_id:id})
    .then( customer =>{
        res.status(200).send({msg:'found your customer',customer})                 
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}