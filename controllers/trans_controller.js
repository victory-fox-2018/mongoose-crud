const Transaction = require('../models/transaction');

module.exports = {
    insert: (req, res ) => {
        const {member, days, out_date, due_date, in_date, fine, booklist} = req.body
        Transaction.create({
            member: member,
            days: days,
            out_date: out_date,
            due_date: due_date,
            in_date: in_date,
            fine: fine,
            booklist: booklist
        })
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

    read: (req, res) => {
        Transaction.find().populate('member').populate('booklist')
        .then((result) => {
            res.status(201).json({
                data: result
            })  
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }, 

    update: (req, res) => {
        let datatoUpdate = {}
        if(req.body.member) datatoUpdate.member = req.body.member
        if(req.body.days) datatoUpdate.days = req.body.days
        if(req.body.out_date) datatoUpdate.out_date = req.body.out_date
        if(req.body.dua_date) datatoUpdate.dua_date = req.body.dua_date
        if(req.body.in_date) datatoUpdate.in_date = req.body.in_date
        if(req.body.fine) datatoUpdate.fine = req.body.fine
        // if(req.body.booklist) datatoUpdate.booklist = req.body.booklist
        Transaction.updateOne({_id: req.params.id}, {$push : {booklist : req.body.booklist}, $set: datatoUpdate})
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

    remove: (req, res) => {
        Transaction.deleteOne({_id : req.params.id})
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
