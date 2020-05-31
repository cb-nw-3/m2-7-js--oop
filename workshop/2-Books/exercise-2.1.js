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
    // If the book doesn't provide a value for `isRead`, it should default to `false`.
    this.isRead = isRead || false;
  }
}

// Declare the books as book1, book2, book3, book4, book5
// order: title(string), genre(string), author(string), isRead(boolean)
const book1 = new Book('Meathead: The Science of Great Barbecue and Grilling Hardcover', 'Cookbooks', 'Meathead Goldwyn', true);
const book2 = new Book('The Barbecue! Bible', 'Cookbooks', 'Steven Raichlen');
const book3 = new Book('Southern Living Ultimate Book of BBQ', 'Cookbooks', 'The Editors of Southern Living and Chris Prieto');
const book4 = new Book('Cooking with Fire', 'Cookbooks', 'Paula Marcoux');
const book5 = new Book('Seven Fires: Grilling the Argentine Way Hardcover', 'Cookbooks', 'Francis Mallmann');


console.log(book1, book2, book3, book4, book5);
