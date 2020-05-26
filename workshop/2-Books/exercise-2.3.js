// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

class Book {
  constructor(paramTitle, paramGenre, paramAuthor, paramIsRead = false) {
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

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }
  add = (paramBook) => {
    this.books.push(paramBook);
  };

  getNumRead = () => {
    let counter = 0;
    this.books.forEach((element) => {
      if (element.isRead === true) {
        counter = counter + 1;
      }
    });
    return counter;
  };
  getNumUnread = () => {
    let counter = 0;
    this.books.forEach((element) => {
      if (element.isRead === false) {
        counter = counter + 1;
      }
    });
    return counter;
  };
}

/*
OR
console.log(homeLibrary.books);
console.log(homeLibrary.lastRead);
console.log(homeLibrary.currentlyReading);
*/

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class.
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

//1. Creat add method in BookList class
//2. Take a book as a parameter
//3. When call .add should push the new book in the BookList class
//4. Books have a isRead property to indicate if read or not
//5. Add 2 new methods
//------1-getNumRead
//------2-getNumUnread
//6. Methods return the number of books read and unread

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));

// But, we can specify that we've read it:
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
