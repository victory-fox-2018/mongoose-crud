const User = require('../models/user')
const objId = require('mongodb').ObjectID

class UserController {

    static insert(req, res) {

        let data = {
            fullName : req.body.fullName,
            memberId : req.body.memberId,
            address : req.body.address,
            zipcode : req.body.zipcode,
            phone : req.body.phone
        }
        let user = new User(data);

        user.save((err) => {
            if (!err) {
                res.status(201).json({
                    message : 'inserting user success',
                    userData : data 
                })
            } else {
                res.status(500).json({
                    message : err
                })
            }
        });
    }
    
    static update(req, res) {
        
        User.updateOne({ "_id": objId(req.params.id) }, req.body, (err, result) =>  {
            if (!err) {
                res.status(201).json({
                    message : 'updating user success',
                    userData : result 
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        })
    }

    static remove(req, res) {
        
        User.deleteOne({ "_id": objId(req.params.id) },(err) => {
            if (!err) {
                res.status(200).json({
                    message : 'deleting user success'
                })
            } else {
                res.status(500).json({
                    message : 'deleting user failed'
                })
            }
        });
    }

    static findAll(req,res) {
        
        User.find((err, users) => {
            if (!err) {
                res.status(200).json({
                    usersData : users 
                })
            } else {
                res.status(500).json({
                    message : err.message
                })
            }
        });
    }

}

module.exports = UserController