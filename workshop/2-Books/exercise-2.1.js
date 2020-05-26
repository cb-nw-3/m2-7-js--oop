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
    (this.title = title),
      (this.genre = genre),
      (this.author = author),
      (this.isRead = !isRead ? false : isRead);
  }
}

let book1 = new Book(
  "The Valkyries",
  "Novel, Fiction, Mystery",
  "Paulo Coelho",
  true
);
let book2 = new Book(
  "Java: A Beginners Guide",
  "Thesis",
  "Herbert Schildt",
  true
);
let book3 = new Book(
  "Professional C# 7 and .NET Core 2.0: Edition 7",
  "Programming Book",
  "Christian Nagel",
  true
);
let book4 = new Book(
  "Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming",
  "Programming Book",
  "Eric Matthes"
);
let book5 = new Book(
  "C++ for dummies",
  "Programming Book",
  "Stephen Randy Davis"
);

console.log(book1, book2, book3, book4, book5);
