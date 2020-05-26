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
    this.isRead = isRead || false;
  }
}

let book1 = new Book(
  "How Women Rise",
  "Personal Development",
  "Sally Helgesen",
  true
);
let book2 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "Fiction",
  "J. K. Rowling"
);
let book3 = new Book("The 4-Hour Workweek", "Self-help", "Tim Ferriss", false);
let book4 = new Book(
  "Love You Forever",
  "Children's Literature",
  " Robert Munsch",
  true
);
let book5 = new Book("Bridget Jones's Diary", "Fiction", "Helen Fielding");

console.log(book1, book2, book3, book4, book5);
