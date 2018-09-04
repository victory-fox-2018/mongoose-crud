const hash = require('../helpers/hashhelper')
const Customer = require('../models/customerModel')

module.exports = {
    
    createOne: (req, res) => {
        let objCustomer = {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone,
        }
        Customer.create(objCustomer)
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    getAll: (req, res) => {
        Customer.find()
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    getOne: (req, res) => {
        Customer.findById({_id:req.params.id})
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    },

    updateOne: (req, res) => {
        let objCustomer = {
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone,
        }
        Customer.findByIdAndUpdate({_id: req.params.id}, objCustomer)
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }, 

    deleteOne: (req, res) => {
        Customer.findByIdAndDelete({_id: req.params.id})
        .then( response => {
            res.status(201).json(response)
        })
        .catch( err => {
            res.status(500).json(err)
        })
    }
}