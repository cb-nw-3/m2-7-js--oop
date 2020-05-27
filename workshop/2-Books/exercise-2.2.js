// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - `books` (empty array)
//      - `lastRead` - reference to last book read (null for now)
//      - `currentlyReading` - reference to current book (null for now)
//
// Then instantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.
// Create a BookList class

class BookList {
  constructor() {
    //below are properties
    this.books = [];
    this.currentlyReading = null;
    this.lastRead = null;
  }
}
//Then instantiate it once as 'homeLibrary'
const homeLibrary = new BookList();

console.log(homeLibrary);
