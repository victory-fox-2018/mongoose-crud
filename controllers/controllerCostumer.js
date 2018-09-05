const Costumer = require('../models/modelCustomer')


module.exports = {

    getAllCostumer: (req, res) => {
        Costumer.find()
            .then(Costumer => {
                res.status(200).json({
                    message: 'Show all Costumers',
                    data: Costumer
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: 'Failed get all Costumers',
                    err: err.message
                })
            })
    },

    addCostumer: (req, res) => {
        Costumer.create({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
            .then(Costumer => {
                res.status(201).json({
                    message: 'Success add Costumer',
                    data: Costumer
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                })
            })
    },

    findOneCostumer: (req, res) => {
        Costumer.findOne({ _id: req.params.id })
            .then(Costumer => {
                res.status(200).json({
                    data: Costumer
                })
            })
            .catch(err => {
                res.status(500).json({
                    err: err.message
                })
            })
    },

    removeCostumer: (req, res) => {
        Costumer.deleteOne({ _id: req.params.id })
            .then(cusotmer => {
                res.status(200).json({
                    message: 'Costumers has been remove',
                })
            })
            .catch(err => {
                res.status(500).json({
                    err: err.message
                })
            })
    },

    updateCostumer: (req, res) => {
        let where = { _id: req.params.id }
        let value = {
            $set: {
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            }
        }
        Costumer.updateOne(where, value)
            .then(Costumer => {
                res.status(200).json({
                    message: `Costumer has been updated`,
                    data: Costumer
                })
            })
            .catch(err => {
                res.status(500).json({
                    err: err.message
                })
            })
    }


}