const transactions = require('../../models/transactions')

const post = (req, res) => {
    
    transactions.create({
            member: req.body.member,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date ,
            fine: req.body.fine,
            booklist : req.body.booklist
        })      
        .then( (transaction)=> {
            res.status(201).send({msg:'success add a new transactions',transaction})
        })   
        .catch(err => res.status(401).send(err))       
}

module.exports = {post}









