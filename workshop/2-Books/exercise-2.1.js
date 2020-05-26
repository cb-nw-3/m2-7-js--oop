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

//1. creat a book class
//2. include properties in constructor param
//3. call 5 times with different books

class Book {
  constructor(paramTitle, paramGenre, paramAuthor, paramIsRead) {
    this.title = paramTitle;
    this.genre = paramGenre;
    this.author = paramAuthor;
    this.isRead = paramIsRead;
  }
}

// init --> appel
let book1 = new Book("Harry Potter", "magic", "J. K. Rowling", false);
let book2 = new Book("My Mom Is Magical!", "kid", "Moyle, Sabrina", false);
let book3 = new Book("You", "Thriller", "Kepnes, Caroline", true);
let book4 = new Book("Hunger Games", "fiction", "Suzanne Collins", false);
let book5 = new Book(
  "Tuesdays with Morrie",
  "spiritualite",
  "Mitch Albom",
  true
);

console.log(book1, book2, book3, book4, book5);
