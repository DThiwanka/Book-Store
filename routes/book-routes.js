const express = require("express");
const router = express.Router();

const booksController = require("../controllers/books-controller");
// const Book = require("../model/Book");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);

module.exports = router;