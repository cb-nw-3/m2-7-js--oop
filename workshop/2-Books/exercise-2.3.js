// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:
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

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  add = (book) => {
    this.books.push(book);
  };

  getNumRead = () => {
    let booksRead = 0;
    this.books.forEach(function (book) {
      if (book.isRead) {
        booksRead += 1;
      }
    });
    return booksRead;
  };

  getNumUnread = () => {
    let booksUnread = 0;
    this.books.forEach(function (book) {
      if (!book.isRead) {
        booksUnread += 1;
      }
    });
    return booksUnread;
  };
}

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

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(book2);
homeLibrary.add(book5);

// But, we can specify that we've read it:
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
