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

book1 = new Book("The Sisters Brothers", "Western", "Patrick DeWitt", true);
book2 = new Book("Children of Time", "Sci-Fi", "Adrian Tchaikovsky", true);
book3 = new Book("The Choirboys", "Crime", "Joseph Wambaugh", false);
book4 = new Book("Conversations with Friends", "Fiction", "Sally Rooney", true);
book5 = new Book("The Luminaries", "Historical Fiction", "Eleanor Catton");

console.log(book1, book2, book3, book4, book5);
