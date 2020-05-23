// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(initialTitle, initialGenre, initialAuthor, initialIsRead = false) {
        this.title = initialTitle;
        this.genre = initialGenre;
        this.author = initialAuthor;
        this.isRead = initialIsRead;
    }
}

let book1 = new Book("Red Mars", "sci-fi", "Kim Stanley Robinson", true)
let book2 = new Book("The Return of the King", "fantasy", "JRR Tolkein", true);
let book3 = new Book("A Hat Full of Sky", "fantasy", "Terry Pratchett", true);
let book4 = new Book("Ulysses", "fiction", "James Joyce");
let book5 = new Book("The Garden of Forking Paths", "fiction", "Jorge Luis Borges", true);

console.log(book1, book2, book3, book4, book5);
