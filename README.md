# mongoose-crud

List of Book routes:

| Route                 |  HTTP  | Desription                                                   |
| --------------------- |:------:| ------------------------------------------------------------ |
| /books                | GET    | Show All books Data                                          |
| /books/:id            | GET    | Get a single book info                                       |
| /books/:id            | DELETE | Delete Single Book                                           |
| /books                | POST   | Create a book                                                |
| /books/:id            | PUT    | Update a book with new info                                  |

Get All Books Data
```
Example :
http://localhost:3000/books

output :
{
    "message": "Show All Books",
    "books": [
        {
            "_id": "5b8e011ee99dfd2ae4bc666b",
            "isbn": "978-1-60309-057-5",
            "title": "Pukulan Naga",
            "author": "James Kochalka",
            "category": "All Ages",
            "stock": "3"
        }
    ]
}
```

Get a Single Book Info
```
Example :
http://localhost:3000/books/5b8e011ee99dfd2ae4bc666b

output : 
{
    "message": "Successfully find Book",
    "book": {
        "_id": "5b8e011ee99dfd2ae4bc666b",
        "isbn": "978-1-60309-057-5",
        "title": "Pukulan Naga",
        "author": "James Kochalka",
        "category": "All Ages",
        "stock": "3"
    }
}
```
<hr>
List of Customer routes:

| Route                     |  HTTP  | Desription                                                   |
| ------------------------- |:------:| ------------------------------------------------------------ |
| /customers                | GET    | Show All Customers Data                                      |
| /customers/:id            | GET    | Get a single Customers info                                  |
| /customers/:id            | DELETE | Delete Single Customer                                       |
| /customers                | POST   | Create a Customer                                            |
| /customers/:id            | PUT    | Update a Customer with new info                              |

Get All Customers Data
```
Example GET:
http://localhost:3000/customers

output :
{
    "message": "Success Find All Customers",
    "data": [
        {
            "_id": "5b8e48a870b3117174744145",
            "name": "Rubi Henjaya",
            "memberId": "CL0001",
            "address": "Ujung Berung Bandung",
            "zipcode": "40294",
            "phone": "01234567890",
            "createdAt": "2018-09-04T08:56:08.122Z",
            "updatedAt": "2018-09-04T08:56:08.122Z",
            "__v": 0
        },
        {
            "_id": "5b8e490370b3117174744146",
            "name": "Riza Fahmi",
            "memberId": "CL0002",
            "address": "Something in Jakarta",
            "zipcode": "50022",
            "phone": "01234567890",
            "createdAt": "2018-09-04T08:57:39.304Z",
            "updatedAt": "2018-09-04T08:57:39.304Z",
            "__v": 0
        },
        {
            "_id": "5b8e492370b3117174744147",
            "name": "Muhammad Minzard Dillah",
            "memberId": "CL0003",
            "address": "Something in Bekasi",
            "zipcode": "17111",
            "phone": "01234567890",
            "createdAt": "2018-09-04T08:58:11.730Z",
            "updatedAt": "2018-09-04T08:58:33.205Z",
            "__v": 0
        }
    ]
}
```

Get a Single Customers Info
```
Example GET:
http://localhost:3000/customers/5b8e492370b3117174744147

output : 
{
    "message": "Found It",
    "data": {
        "_id": "5b8e492370b3117174744147",
        "name": "Muhammad Minzard Dillah",
        "memberId": "CL0003",
        "address": "Something in Bekasi",
        "zipcode": "17111",
        "phone": "01234567890",
        "createdAt": "2018-09-04T08:58:11.730Z",
        "updatedAt": "2018-09-04T08:58:33.205Z",
        "__v": 0
    }
}
```

<hr>
List of Customer routes:

| Route                        |  HTTP  | Desription                                                      |
| ---------------------------- |:------:| --------------------------------------------------------------- |
| /transactions                | GET    | Show All Transactions Data                                      |
| /transactions/:id            | GET    | Get a single Transactions info                                  |
| /transactions/:id            | DELETE | Delete Single Transaction                                       |
| /transactions                | POST   | Create a Transaction                                            |
| /transactions/:id            | PUT    | Update a Transaction with new info                              |

Get All Transactions Data
```
Example GET:
http://localhost:3000/transactions/

output:
{
    "message": "Found All Transactions",
    "data": [
        {
            "booklist": [
                "5b8e4348dbda9f699bf64768",
                "5b8e011ee99dfd2ae4bc666b"
            ],
            "_id": "5b8e54512b7b9e02e1dc4745",
            "member": "5b8e492370b3117174744147",
            "days": 10,
            "fine": 5000,
            "out_date": "2018-09-04T09:45:53.377Z",
            "due_date": "2018-09-04T09:45:53.377Z",
            "in_date": "2018-09-04T09:45:53.377Z",
            "__v": 0
        },
        {
            "booklist": [
                "5b8e4348dbda9f699bf64768",
                "5b8e011ee99dfd2ae4bc666b"
            ],
            "_id": "5b8e54ca65303d03487957f4",
            "member": "5b8e492370b3117174744147",
            "days": 10,
            "fine": 5000,
            "out_date": "2018-09-04T09:47:54.346Z",
            "due_date": "2018-09-04T09:47:54.347Z",
            "in_date": "2018-09-04T09:47:54.347Z",
            "__v": 0
        }
    ]
}
```

Get Transaction Info

```
Example GET:
http://localhost:3000/transactions/5b8e54512b7b9e02e1dc4745

output:
{
    "message": "Found It",
    "data": {
        "booklist": [
            "5b8e4348dbda9f699bf64768",
            "5b8e011ee99dfd2ae4bc666b"
        ],
        "_id": "5b8e54512b7b9e02e1dc4745",
        "member": "5b8e492370b3117174744147",
        "days": 10,
        "fine": 5000,
        "out_date": "2018-09-04T09:45:53.377Z",
        "due_date": "2018-09-04T09:45:53.377Z",
        "in_date": "2018-09-04T09:45:53.377Z",
        "__v": 0
    }
}
```