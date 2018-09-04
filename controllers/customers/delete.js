const customers = require('../../models/customers')

const remove = (req,res)=>{
    let id = req.params.id
    
    customers.findOneAndRemove({_id:id})
    .then(customer =>{
        res.status(200).send({msg:'success delete',customer})
    })
    .catch(err => res.status(400).send(err))  
}

module.exports = {remove}