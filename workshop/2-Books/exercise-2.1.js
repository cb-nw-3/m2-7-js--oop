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
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    if (isRead === undefined || isRead === null) {
      this.read = false;
    } else {
      this.read = isRead;
    }
  }
}

let book1 = new Book(
  "Head First: JavaScript Programming",
  "Computers",
  "Freeman & Robson",
  true
);
let book2 = new Book(
  "HTML & CSS: Design and Build Websites",
  "Computers",
  "Jon Duckett",
  true
);
let book3 = new Book(
  "The Elements of Computing Systems",
  "Computers",
  "Nisan & Schocken",
  false
);
let book4 = new Book("Code", "Computers", "Petzold");

let book5 = new Book(
  "Fullstack React Native",
  "Computers",
  "Abbott, Djirdeh, Accomazzo & Shoemaker",
  false
);

console.log(book1, book2, book3, book4, book5);
