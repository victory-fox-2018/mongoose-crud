const Customer = require('../models/customer')

const register = (req, res) => {
    Customer.create({
        name: req.body.name,
        memberid: req.body.memberid,
        address: req.body.address,
        zipcode: req.body.zipcode,
        phone: req.body.phone
    })
    .then((data) => {
        res.status(201).json({
            msg: `success create new customer`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

const findAllCustomer = (req, res) => {
    Customer.find({})
    .then((data) => {
        res.status(201).json({
            msg: `list of all customer`,
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

const updateCustomer = (req, res) => {

    const { name, memberid, address, zipcode, phone } = req.body
    let dataUpdate = {}
    if(name) dataUpdate.name = name
    if(memberid) dataUpdate.memberid = memberid
    if(zipcode) dataUpdate.zipcode = zipcode
    if(phone) dataUpdate.phone = phone

    Customer.updateOne({
        _id: req.params.id
    }, dataUpdate)
    .then(() => {
        res.status(201).json({
            msg: `success update customer's data`,
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

const deleteCustomer = (req, res) => {
    Customer.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(201).json({
            msg: `success delete customer's data`,
        })
    })
    .catch((err) => {
        res.status(400).json({
            msg: err.message
        })
    })
}

module.exports = {
    register,
    findAllCustomer,
    updateCustomer,
    deleteCustomer
};
