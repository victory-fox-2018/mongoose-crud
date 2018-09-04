# mongoose-crud

<!-- Quotes -->
>Muhammad Khodhi Robbani
<!-- Headings # -->

<!-- link -->


## Models
<!-- UL -->
* Customer
* Transaction
* Item


## Modul Install
```bash
npm install
npm i express
npm i mongoose
```
```javascript
module.exports = mongoose.model('Book', schema);
module.exports = mongoose.model('Customer', schema);
module.exports = mongoose.model('Transaction', schema);

transactions.find()
    .populate('booklist','title')
    .populate('member','name')
    .then(transaction => {
        res.status(200).send({msg:'success', transaction})
    })
```


## REST API


List of customers routes :

|Route|HTTP|Description|
|-----|----|-----------|
|/api/customers|GET|Get all the customers|
|/api/customers/:id|GET|Get all a single customers|
|/api/customers|POST|Create a user|
|/api/customers/:id|DELETE|Delete a user|
|/api/customers/:id|PUT|Update a user with new info|


List of books routes :

|Route|HTTP|Description|
|-----|----|-----------|
|/api/books|GET|Get all the books|
|/api/books/:id|GET|Get all a single books|
|/api/books|POST|Create a book|
|/api/books/:id|DELETE|Delete a book|
|/api/books/:id|PUT|Update a book with new info|


List of transactions routes :

|Route|HTTP|Description|
|-----|----|-----------|
|/api/transactions|GET|Get all the transactions|
|/api/transactions/:id|GET|Get all a single transactions|
|/api/transactions|POST|Create a transactions|
|/api/transactions/:id|DELETE|Delete a transactions|
|/api/transactions/:id|PUT|Update a transactions with new info|
