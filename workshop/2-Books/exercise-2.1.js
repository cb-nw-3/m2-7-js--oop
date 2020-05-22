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
  constructor(bookTitle, bookGenre, bookAuthor, isRead = false) {
    this.title = bookTitle;
    this.genre = bookGenre;
    this.author = bookAuthor;
    this.isRead = isRead;
  }
}

book1 = new Book('LoTR 1', 'Fantasy', 'J.R.R. Tolkien', true);
book2 = new Book('LoTR 2', 'Fantasy', 'J.R.R. Tolkien', true);
book3 = new Book('LoTR 3', 'Fantasy', 'J.R.R. Tolkien');
book4 = new Book('The Hobbit 1', 'Fantasy', 'J.R.R. Tolkien', true);
book5 = new Book('The Hobbit 2', 'Fantasy', 'J.R.R. Tolkien', false);

console.log(book1, book2, book3, book4, book5);
