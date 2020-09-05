## [Authentication and Authorization with JWTs in Express.js](https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/)

#### Login: Send post request to get access token
```nodemon auth.js```

curl -X POST -H "Content-Type:application/json" http://localhost:3000/login -d '{"username": "john", "password": "password123admin"}'

#### Retrieve all books from the simulated database
```nodemon books.js```
TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTkxMDg5MDZ9.qCE1ncqYQgYbQC8u68CElT-iuWygf1OUhChur0g3jns
echo $TOKEN
curl -i http://localhost:4000/books -H "Authorization:Bearer ${TOKEN}"

#### Create new book
// Admin access token:
TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1OTkxMDg5MDZ9.qCE1ncqYQgYbQC8u68CElT-iuWygf1OUhChur0g3jns
curl -i -X POST -H "Content-Type:application/json" http://localhost:4000/books -H "Authorization:Bearer ${TOKEN}" -d '
{
    "author": "Jane Austen",
    "country": "United Kingdom",
    "language": "English",
    "pages": 226,
    "title": "Pride and Prejudice",
    "year": 1813
}'

#### Logout
curl -X POST -H "Content-Type:application/json" http://localhost:3000/logout -H "Authorization:Bearer ${TOKEN}"

## [Handling Authentication in Express.js](https://stackabuse.com/handling-authentication-in-express-js/)
```nodemon app.js```

http://localhost:3000