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
    constructor(title, genre, author, isRead=false){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
    }
}

let book1 = new Book('Homo Faber', 'travel', 'Max Frisch', true);
let book2 = new Book('Winnetou', 'western', 'Karl May', true);
let book3 = new Book('Old Shatterhand', 'western', 'Karl May');
let book4 = new Book('Siddhartha', 'philosophy', 'Hermann Hesse', true);
let book5 = new Book('Also Sprach Zarathustra', 'philosophy', 'Nietzsche', false);

console.log(book1, book2, book3, book4, book5);

