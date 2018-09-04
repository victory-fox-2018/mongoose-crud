const Customer = require('../models/customer')

module.exports = {
    addCustomer: (req, res) => {
        Customer
            .create({
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            })
            .then(customer => {
                res.status(201).json({
                    message: 'Add customer success',
                    data: customer
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },
    displayAllCustomers: (req, res) => {
        Customer
            .find()
            .then(customers => {
                res.status(200).json({
                    message: 'Display all data customers success',
                    data: customers
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },
    displaySingleCustomer: (req, res) => {
        Customer
            .findOne({
                _id: req.params.id
            })
            .then(customer => {
                res.status(200).json({
                    message: 'Display data customer success',
                    data: customer
                })
            })
            .catch(err => {
                res.status(404).json({
                    message: 'Id not found'
                })
            })
    },
    updateCustomer: (req, res) => {
        Customer
            .findByIdAndUpdate({
                _id: req.params.id
            },{
                $set:{
                    name: req.body.name,
                    memberid: req.body.memberid,
                    address: req.body.address,
                    zipcode: req.body.zipcode,
                    phone: req.body.phone
                }
            })
            .then(() => {
                Customer
                    .findOne({
                        _id: req.params.id
                    })
                    .then(customerUpdated => {
                        res.status(200).json({
                            message: 'Update data customer success',
                            data: customerUpdated
                        })
                    })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },
    deleteCustomer : (req, res) => {
        Customer
            .findOneAndDelete({
                _id: req.params.id
            })
            .then(deletedCustomer => {
                res.status(200).json({
                    message: `Delete customer success`,
                    data: deletedCustomer
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                }) 
            })
    }
}