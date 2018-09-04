const ObjectId = require('mongodb').ObjectId;
const Customer = require('../models/customerModel')

class CustomerController {

    static showAll(req, res) {
        Customer.find({}, (err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static showOne(req, res) {
        Customer.findById(ObjectId(req.params.id), (err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static showOne(req, res) {
        Customer.find({_id: ObjectId(req.params.id)}, (err, docs) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(200).json({data: docs})
            }
        })
    }

    static add(req, res) {
        Customer.create({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Customer '${req.body.name}' added`})
            }
        })
    }

    static edit(req, res) {
        Customer.updateOne({
            _id: ObjectId(req.params.id)
        },{
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Customer with id: '${req.params.id}' updated`})
            }
        })
    }

    static destroy(req, res) {
        Customer.deleteOne({
            _id: ObjectId(req.params.id)
        }, (err) => {
            if (err) {
                res.status(500).json({message: err.message})
            } else {
                res.status(201).json({message: `Customer with id: '${req.params.id}' deleted`})
            }
        })
    }
}

module.exports = CustomerController