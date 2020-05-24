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
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

let book1 = new Book(
  "The Name of the Wind",
  "Fantasy",
  "Patrick Rothfuss",
  true
);

let book2 = new Book(
  "Shantaram",
  "Adventure Fiction",
  "Gregory David Roberts",
  true
);
let book3 = new Book("The Bone Tree", "Mystery Fiction", "Greg Iles", true);
let book4 = new Book("Animal Farm", "Dystopian Fiction", "George Orwell");
let book5 = new Book(
  "The Mill On the Floss",
  "Classic Fiction",
  "George Eliot",
  true
);

console.log(book1, book2, book3, book4, book5);
