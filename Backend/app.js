const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');

const app = express();

//Middlewares

app.use(express.json());
app.use(cors());
app.use("/books",router); //localhost:5000/books

// app.use('/', (req, res, next) => {
//     res.send("Starting app!");
// });

// const cors = require('cors');


mongoose.connect("mongodb+srv://hykie:GUDyTKsVBRwNi3mW@cluster0.ub7gbdm.mongodb.net/bookStore?retryWrites=true&w=majority")
    .then(() =>
        console.log("Connected to database!"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) =>  console.log(err));

console.log("Test");