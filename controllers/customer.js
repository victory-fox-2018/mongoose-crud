const Customer = require('../models/customer')

const addCustomer = function (req, res) {
    let { name, memberid, address, zipcode, phone } = req.body
    Customer.create({
        name:name,
        memberid:memberid,
        address:address,
        zipcode:zipcode,
        phone:phone
    })
    .then(function (newCustomer) {
        res.status(200).json({
            message: "add Customer succes",
            data: newCustomer
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "add Customer failed",
            error: err.message
        })
    })
}

const getAllCustomer = function (req, res) {
    Customer.find({})
    .then(function (Customers) {
        res.status(200).json({
            message: "data found",
            data: Customers
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "error get data",
            error: err.message
        })
    })
}

const getOneCustomer = function (req, res) {
    Customer.findOne({
        _id: req.params.id
    })
    .then(function (Customer) {
        res.status(200).json({
            message: "data Customer found",
            data: Customer
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "error get data Customer",
            error: err.message
        })
    })
}

const deleteCustomer = function (req, res) {
    Customer.deleteOne({ _id: req.params.id })
    .then(function () {
        res.status(200).json({
            message: "delete success"
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "delete failed",
            error: err.message
        })
    })
}

const updateCustomer = function (req, res) {
    let { name, memberid, address, zipcode, phone } = req.body
    let objForUpdate = {}
    if (name) objForUpdate.name = name
    if (memberid) objForUpdate.memberid = memberid
    if (address) objForUpdate.address = address
    if (zipcode) objForUpdate.zipcode = zipcode
    if (phone) objForUpdate.phone = phone
    var setObj = { $set: objForUpdate }

    Customer.updateOne({ _id: req.params.id }, setObj)
    .then(function (Customer) {
        res.status(200).json({
            message: "update success",
            data: Customer
        })
    })
    .catch(function (err) {
        res.status(400).json({
            message: "update failed",
            error: err.message
        })
    })
}

module.exports = { addCustomer, getAllCustomer, getOneCustomer, deleteCustomer, updateCustomer }