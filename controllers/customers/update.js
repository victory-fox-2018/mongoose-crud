const customers = require('../../models/customers')

const put = (req,res)=>{
    let id = req.params._id
    customers.update(
    { id },
    { $set:
        {
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }
    })
    .then(customer => {
        res.status(201).send({msg:'success updated customer',customer})
    })
    .catch(err => res.status(400).send(err))
         
      
}

module.exports = {put}
