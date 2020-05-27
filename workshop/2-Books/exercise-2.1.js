// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)

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

let book1 = new Book("Homo Deus", "Enlightening", "Yuval Noah Harari", true);
let book2 = new Book("Homo Sapiens", "Enlightening", "Yuval Noah Harari", true);
let book3 = new Book(
  "The Saint, the Surfer and the Ceo",
  "Enlightening",
  "Robin Sharma"
);
let book4 = new Book("Shoe Dog", "Biography", "Phil Knight", true);
let book5 = new Book("Steve Jobs", "Biography", "Walter Isaacson", true);

console.log(book1, book2, book3, book4, book5);
