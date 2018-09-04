const Customer = require('../models/Customer');

const createObjectId = require('../helpers/createObjectId');
const errorHandling = require('../helpers/errorHandling');

class CustomerController {
  
  static findAll(req, res) {
    Customer.find((err, customers) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success get all customers data',
        customers: customers
      });
    });
  }

  static findById(req, res) {
    let id = createObjectId(req.params.id);

    Customer.findById(id, (err, customer) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success get customer data',
        customer: customer
      });
    });
  }

  static create(req, res) {
    let input = {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    };
    let customer = new Customer(input);

    customer.save((err, customer) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success create new customer',
        customer: customer
      });
    });
  }

  static update(req, res) {
    let id = createObjectId(req.params.id);
    let input = {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    };

    Customer.updateOne({_id: id}, input, (err, affected) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success update data',
        affected: affected
      });
    });
  }

  static remove(req, res) {
    let id = createObjectId(req.params.id);

    Customer.deleteOne({_id: id}, (err) => {
      if(err) errorHandling(res, 500, err);

      res.status(200).json({
        message: 'success delete data'
      });
    })
  }

}

module.exports = CustomerController;