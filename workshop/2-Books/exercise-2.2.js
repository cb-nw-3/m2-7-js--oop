// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - `books` (empty array)
//      - `lastRead` - reference to last book read (null for now)
//      - `currentlyReading` - reference to current book (null for now)
//
// Then instantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.

class Book {

  constructor  (initTitle, initGenre, initAuthor, initIsRead = false) {
      this.title = initTitle;
      this.genre = initGenre;
      this.author = initAuthor;
      this.isRead = initIsRead;
  }

}



class BookList {
    constructor () {
      this.books = [Book];
      this.lastRead = null;
      this.currentlyReading = null;
    }
}


let homeLibrary = new BookList();
console.log(homeLibrary);