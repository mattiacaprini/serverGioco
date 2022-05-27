const cars = require('./data');

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const host = "127.0.0.1"
const port = 3333;

app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/cars', (req, res) => {
  res.send(cars);
});

// app.post('/book', (req, res) => {
//     const book = req.body;


//     console.log(book);
//     books.push(book);

//     res.send('Book is added to the database');
// });

app.listen(port, host, () => console.log(`Hello world app listening on port ${port}!`));