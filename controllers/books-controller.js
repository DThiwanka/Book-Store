const Book = require('../model/Book');

const getAllBooks = async (req, res, next) => {
    let books;

    try {
        books = await Book.find();

    } catch (err) {
        console.log(err)
    }

    if (!books) {

        return res.status(404).json({ message: "No Products Found!" })

    }

    return res.status(200).json({ books });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err)

    }

    if (!book) {

        return res.status(404).json({ message: "No Book Found!" })

    }

    return res.status(200).json({ book });


}

const addBook = async (req, res, next) => {

    const { name, author, description, price, available } = req.body;

    let book;

    try {
        book = new Book({

            name,
            author,
            description,
            price,
            available

        });

        await book.save();

    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(404).json({ message: "Book not added!" })
    }

    return res.status(200).json({ book });

}

const updateBook = async (req, res, next) => {

    const id = req.params.id;
    const { name, author, description, price, available } = req.body;
    let book;

    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available
        });

        book = await book.save()

    } catch (err) {
        console.log(err)
    }

    if (!book) {
        return res.status(404).json({ message: "Book Unable to Update !" })
    }

    return res.status(200).json({ book });
    

}

const deleteBook = async (req,res,next) =>{

    const id = req.params.id;
    let book;
    
    try {
        book = await Book.findByIdAndRemove(id);

    } catch (err) {
        console.log(err);

        if (!book) {
            return res.status(404).json({ message: "Book Unable to Delete !" })
        }
    
        return res.status(200).json({ book });

    }

}



exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;