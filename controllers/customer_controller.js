const Customer = require('../models/customer');

module.exports = {
    insertCst: (req, res) => {
        console.log(req.body);
        
        let newCst = new Customer(req.body)
        newCst.save()
        .then((result) => {
            res.status(201).json({
                msg: 'insert succes',
                data: result
            })  
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    getCst: (req, res) => {
        Customer.find()
        .then((result) => {
            res.status(201).json({
                data: result
            }) 
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }, 
    updateCst: (req, res) => {
        let datatoUpdate = {}
        if(req.body.name) datatoUpdate.name = req.body.name
        if(req.body.member_id) datatoUpdate.member_id = req.body.member_id
        if(req.body.address) datatoUpdate.address = req.body.address
        if(req.body.zipcode) datatoUpdate.zipcode = req.body.zipcode
        if(req.body.phone) datatoUpdate.phone = req.body.phone

        Customer.updateOne({_id: req.params.id}, datatoUpdate)
        .then((result) => {
            res.status(201).json({
                msg: 'update succes',
                data: result
            }) 
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },
    deleteCst: (req, res) => {
        Customer.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(201).json({
                msg: 'delete succes',
                data: result
            }) 
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
};
