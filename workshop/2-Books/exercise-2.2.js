// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - `books` (empty array)
//      - `lastRead` - reference to last book read (null for now)
//      - `currentlyReading` - reference to current book (null for now)
//
// Then instantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.


// Create a `BookList` class that accept a few properties(books, lastRead, currentlyReading)
class BookList {
  constructor(books, lastRead, currentlyReading) {
    this.books = []; // empty array
    this.lastRead = null; // reference to last book read (null for now)
    this.currentlyReading = null; // reference to current book (null for now)
  }
}

// instantiate `BookList` once as 'homeLibrary'
const homeLibrary = new BookList();


console.log(homeLibrary)
// BookList { books: [], lastRead: null, currentlyReading: null }
