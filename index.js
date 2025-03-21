const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// In-memory storage for books
let books = [];

// Endpoint to return student number
app.get("/whoami", (req, res) => {
    res.json({ studentNumber: "2575307" }); // Replace with your actual student number
});

// Get all books
app.get("/books", (req, res) => {
    res.json(books);
});

// Get a single book by ID
app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
});

// Add a new book
app.post("/books", (req, res) => {
    const { id, title, details } = req.body;

    if (!id || !title || !details || !Array.isArray(details)) {
        return res.status(400).json({ error: "Missing required book details" });
    }

    books.push({ id, title, details });
    res.status(201).json({ message: "Book added successfully" });
});

// Update an existing book
app.put("/books/:id", (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    const { title, details } = req.body;
    if (title) book.title = title;
    if (details) book.details = details;

    res.json({ message: "Book updated successfully" });
});

// Delete a book
app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id !== req.params.id);
    res.json({ message: "Book deleted successfully" });
});

// Add a detail to a book
app.post("/books/:id/details", (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) {const express = require("express");
        const app = express();
        const PORT = 3000;
        
        app.use(express.json());
        
        app.listen(PORT , ()=>{
            console.log('My server is running on port number ${PORT}');
        });
        
        
        app.get("/whoami", (req , res)=>{
            res.json({myStudentNumber:"2555047"});
        });
        
        let books = [];
        
        app.get("/books" , (req , res)=>{
            res.json(books)
        });
        
        
        return res.status(404).json({ error: "Book not found" });
    }

    const { id, author, genre, publicationYear } = req.body;
    if (!id || !author || !genre || !publicationYear) {
        return res.status(400).json({ error: "Missing required detail fields" });
    }

    book.details.push({ id, author, genre, publicationYear });
    res.json({ message: "Detail added successfully" });
});

// Remove a detail from a book
app.delete("/books/:id/details/:detailId", (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    book.details = book.details.filter(d => d.id !== req.params.detailId);
    res.json({ message: "Detail removed successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

