const customers = require('../../models/customers')

const post = (req, res) => {

    customers.create({
            name: req.body.name,
            memberId: req.body.memberId,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        .then((customer) => {
            res.status(201).send({ msg: 'success add a new customer',customer})
        })
        .catch(err => res.status(401).send(err))
}

module.exports = {
    post
}

