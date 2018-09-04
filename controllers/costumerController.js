const Costumer = require('../models/costumer')

module.exports = {
    createCostumer: function(req, res) {
        Costumer.create({
            memberId: req.body.memberId,
            name: req.body.name,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        })
        .then((result) => {
            res.status(200).json({
                msg: 'create success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    },

    getAllCostumer: function(req, res) {
        Costumer.find({}).sort({ name: 1 })
        .then((result) => {
            res.status(200).json({
                msg: 'data all costumers',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    },

    updateCostumer: function(req, res) {
        let id = req.params.id
        let objCostumer = {}
        if(req.body.memberId) objCostumer.memberId = req.body.memberId;
        if(req.body.name) objCostumer.name = req.body.name;
        if(req.body.address) objCostumer.address = req.body.address;
        if(req.body.zipcode) objCostumer.zipcode = req.body.zipcode;
        if(req.body.phone) objCostumer.phone= req.body.phone;

       Costumer.updateOne(
            { _id: id },
            { $set: objCostumer }
        )
        .then((result) => {
            res.status(200).json({
                msg: 'update success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    },

    deleteCostumer: function(req, res) {
        let id = req.params.id
        Costumer.deleteOne({ _id: id })
        .then((result) => {
            res.status(200).json({
                msg: 'delete success',
                result
            })
        }).catch((err) => {
            res.status(400).json({
                msg: err.message
            })
        });
    }

}