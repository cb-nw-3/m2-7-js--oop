// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

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

class BookList {
  books = [];
  lastRead = null;
  currentlyReading = null;

  add = (book) => {
    this.books.push(book);
  };

  getNumRead = () => {
    return this.books.filter((book) => book.isRead).length;
  };

  getNumUnread = () => {
    return this.books.filter((book) => !book.isRead).length;
  };
}

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class. Also, if no Book is being currently read
// we should set currentlyReading to point to this newly added Book.
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
