# MY APP LIBRARY

### BOOKS FITURE

|       ROUTE         |  HTTP  |           DESCRIPTION           |
|---------------------|--------|---------------------------------|
| /books/             | GET    | Get all the books               |
| /books/title/:code  | GET    | Get book from title, <% LIKE %> |
| /books              | POST   | Create a books                  |
| /books/update/:id   | PUT    | Update a book                   |
| /books/delete/:id   | DELETE | Delete a book                   |


### CUSTOMERS FITURE

|       ROUTE             |  HTTP  |             DESCRIPTION             |
|-------------------------|--------|-------------------------------------|
| /customers/             | GET    | Get all customers                   |
| /customers/name/:name   | GET    | Get customer from name, <% LIKE %>  |
| /customers              | POST   | Create a customer                   |
| /customers/update/:id   | PUT    | Update a customer                   |
| /customers/delete/:id   | DELETE | Delete a customer                   |


### TRANSACTIONS FITURE

|       ROUTE              |  HTTP  |             DESCRIPTION             |
|--------------------------|--------|-------------------------------------|
| /transactions/           | GET    | Get all transaction                 |
| /transactions            | POST   | Create a transaction                |
| /transactions/update/:id | PUT    | Update a customer                   |
| /transactions/delete/:id | DELETE | Delete a customer                   |

#### NOTE :

```
Transactions insert fiturs : 

Ketika insert atau create transactions
days     => 3
out_date => 2018/09/19
booklist => idBook yang di insert
in_date  => 2018/09/27

Dimana nilai fine adalah
due_date = out_date + days
fine     = in_date - due_date  
```




