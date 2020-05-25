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
    this.isRead = isRead || false; //is a bool, if not read then false
  }
}

let book1 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "Fantasy Adventure", 
  "J.K Rowling",
  true
  )

let book2 = new Book(
  "Eragon",
  "Fantasy", 
  "Christopher Paolini",
  true
  )
let book3 = new Book(
  "1984",
  "Dystopian Future", 
  "George Orwell",
  true
  )
let book4 = new Book(
  "Oliver Twist",
  "Serial novel",
  "Charles Dickens", 
  true
  )
let book5 = new Book(
  "The Big Short: Inside the Doomsday Machine",
  "non-fiction", 
  "Michael Lewis",
  )

console.log(book1, book2, book3, book4, book5);
