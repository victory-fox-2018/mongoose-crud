# mongoose-crud

List of books routes:

Route | HTTP | Description | Success | Error
------------ | ------------- | ------------- | ------------- | -------------
/books | GET | Get all books | {books: [{ .... }, .... , { ...... }]} | {error: {error message}}
/books | POST | Create new book | {message: 'Data created!', data: {data}} | {error: {error message}}
/books/:id | PUT | Update a book | {message: 'Data {id} updated!' | {error: {error message}}
/books/:id | DELETE | Delete a book | {message: 'Data {id} deleted!' | {error: {error message}}

List of books parameters:

Parameters | Type 
------------ | -------------
isbn | String
title | String
author | String
category | String
stock | Number

List of customers routes:

Route | HTTP | Description | Success | Error
------------ | ------------- | ------------- | ------------- | -------------
/customers | GET | Get all customers | {customers: [{ .... }, .... , { ...... }]} | {error: {error message}}
/customers | POST | Create new customer | {message: 'Data created!', data: {data}} | {error: {error message}}
/customers/:id | PUT | Update a customer | {message: 'Data {id} updated!' | {error: {error message}}
/customers/:id | DELETE | Delete a customer | {message: 'Data {id} deleted!' | {error: {error message}}

List of books parameters:

Parameters | Type 
------------ | -------------
name | String
memberid | String
address | String
zipcode | String
phone | String

List of transactions routes:

Route | HTTP | Description | Success | Error
------------ | ------------- | ------------- | ------------- | -------------
/transactions | GET | Get all transactions | {transactions: [{ .... }, .... , { ...... }]} | {error: {error message}}
/transactions | POST | Create new transaction | {message: 'Data created!', data: {data}} | {error: {error message}}
/transactions/:id | PUT | Update a transaction | {message: 'Data {id} updated!' | {error: {error message}}
/transactions/:id | PATCH | Update a transaction | {message: 'Data {id} updated!' | {error: {error message}}
/transactions/:id | DELETE | Delete a transaction | {message: 'Data {id} deleted!' | {error: {error message}}

List of transactions parameters:

Parameters | Type 
------------ | -------------
member | String
days | Number
fine | Number
booklist | Array

# Usage

With only npm:
```
npm install
npm start
npm run dev
```

Access the api via `http://localhost:3000` 