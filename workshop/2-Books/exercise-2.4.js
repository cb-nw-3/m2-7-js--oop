// From 2.3
// Copy over all of the code from 2.3...

// *** Exercise-2.1 ***
class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    // If the book doesn't provide a value for `isRead`, it should default to `false`.
    this.isRead = isRead || false;
  }
}

// *** Exercise-2.2 ***
// Create a `BookList` class that accept a few properties(books, lastRead, currentlyReading)
class BookList {
  constructor(books, lastRead, currentlyReading) {
    this.books = []; // empty array
    this.lastRead = null; // reference to last book read (null for now)
    this.currentlyReading = null; // reference to current book (null for now)
  }

  // Create an `add` method in BookList class that take `book` as parameter
  add = (book) => {
    // When call `.add`, it should push new book into the `books` array on the `BookList` class
    this.books.push(book);

    if (!this.currentlyReading) {
      this.currentlyReading = book;
    }

  };

  // Creating two new methods to manage read state
  // Get amount of book read
  getNumRead = () => {
    let numRead = 0;
    this.books.forEach((book) => {
      if (book.isRead === true) {
        numRead += 1;
      }
    });

    return numRead;

  };

  // Get amount of book unread
  getNumUnread = () => {
    let numUnread = 0;
    this.books.forEach((book) => {
      if (book.isRead === false) {
        numUnread += 1;
      }
    });

    return numUnread;

  };

  startReading = (title) => {
    let bookTitle = this.books.find((book) => book.title === title);
    this.currentlyReading = bookTitle;
  };

  finishReading = (title) => {
    let bookTitle = this.books.find((book) => book.title === title);
    this.lastRead = bookTitle;
    this.currentlyReading = null;
  };
}

// Exercise 2.4
/*

In our BookList, we have properties to track:
- The last book we've read
- The book we're currently reading
- The next book up

We're not using these properties yet; they're always null.

Our new task is to make them functional. When we add our first book to the
list, `currentlyReading` should get set to it.

We need two new methods:

- startReading
- finishReading

Both of these methods will take a book title, as a string.

When we start reading a book, we should set the `currentlyReading` property
to point to it.

When we finish reading a book, we should set `currentlyReading` back to `null`,
and set `lastRead` to the book we just finished.

Your goal is to add the methods and behaviour necessary so that the following
code runs well and produces the expected output.
*/

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
homeLibrary.add(
  new Book('The Revisionists', 'Science-fiction', 'thomas Mullen')
);

console.log('initial state', homeLibrary.currentlyReading); // should be The Shining book object
// initial state Book {
//   title: 'The Shining',
//   genre: 'Horror',
//   author: 'Stephen King',
//   isRead: false
// }

console.log('initial last-read', homeLibrary.lastRead); // should be null
// initial last-read null

homeLibrary.finishReading('The Shining');
console.log(
  'Currently reading, after finishing The Shining',
  homeLibrary.currentlyReading
); // should be null
// Currently reading, after finishing The Shining null

console.log('Last-read, after finishing The Shining', homeLibrary.lastRead); // should be The Shining
// Last-read, after finishing The Shining Book {
//   title: 'The Shining',
//   genre: 'Horror',
//   author: 'Stephen King',
//   isRead: false
// }

homeLibrary.startReading('The Revisionists');
console.log(
  'Currentky reading, After starting The Revisionists',
  homeLibrary.currentlyReading
); // should be The Revisionists book
// Currentky reading, After starting The Revisionists Book {
//   title: 'The Revisionists',
//   genre: 'Science-fiction',
//   author: 'thomas Mullen',
//   isRead: false
// }
