// From 2.3
// Copy over all of the code from 2.3...

class Book {
  constructor(bookTitle, bookGenre, bookAuthor, isRead = false) {
    this.title = bookTitle;
    this.genre = bookGenre;
    this.author = bookAuthor;
    this.isRead = isRead;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }
  add(book) {
    this.books.push(book);
    if (!this.currentlyReading) {
      this.currentlyReading = book;
    }
  }
  getNumRead() {
    let amount = 0;
    this.books.forEach(element => {
      if (element.isRead) {
        amount++;
      }
    })
    return amount
  }
  getNumUnread() {
    let amount = 0;
    this.books.forEach(element => {
      if (!element.isRead) {
        amount++;
      }
    })
    return amount
  }
  startReading(bookTitle) {
    this.books.find(element => {
      if (element.title === bookTitle) {
        this.currentlyReading = element;
      }
    })
  }
  finishReading(bookTitle) {
    this.books.find(element => {
      if (element.title === bookTitle) {
        element.isRead = true;
        this.lastRead = element;
        this.currentlyReading = null;
      }
    })
  }
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
console.log('initial last-read', homeLibrary.lastRead); // should be null

homeLibrary.finishReading('The Shining');
console.log(
  'Currently reading, after finishing The Shining',
  homeLibrary.currentlyReading
); // should be null
console.log('Last-read, after finishing The Shining', homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading('The Revisionists');
console.log(
  'Currentky reading, After starting The Revisionists',
  homeLibrary.currentlyReading
); // should be The Revisionists book
