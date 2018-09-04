const customers = require('../../models/customers')

const get = (req,res)=>{
       
    customers.find()
    .then(customer => {
        res.status(200).send({msg:'success', customer})
    })
    .catch(err => res.status(400).send(err))
      
}

module.exports = {get}