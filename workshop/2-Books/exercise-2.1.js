// Exercise 2.1
// ------------

// Create a Book class and then instantiate it 5 times with various books
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
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}
let book1 = new Book('Harry Potter', 'Fantasy', 'J.K Rowling', true);
let book2 = new Book('Spider-Man', 'Comics', 'Stan Lee', false);
let book3 = new Book('Game Of Thrones', 'Medieval', 'Georges R R Martin');
let book4 = new Book('Star Wars', 'Sci-Fi', 'Georges Lucas', true);
let book5 = new Book('Blade Runner', 'Sci-Fi', 'Philip Dick', false);

console.log(book1, book2, book3, book4, book5);
