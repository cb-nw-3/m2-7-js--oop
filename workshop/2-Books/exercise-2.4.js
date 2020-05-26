// From 2.3
// Copy over all of the code from 2.3...
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
    this.currentlyReading = this.books[0].title;
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

  startReading = (paramTitle) => {
    this.currentlyReading = paramTitle;
  };

  finishReading = (paramTitle) => {
    this.currentlyReading = null;
    this.lastRead = paramTitle;
  };
}

//const homeLibrary = new BookList();

// Books are unread by default:
//homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
//homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));

// But, we can specify that we've read it:
// homeLibrary.add(
//   new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
// );

// At this point, we should have 2 unread books, and 1 read book:
// console.log(homeLibrary.getNumUnread()); // 2
// console.log(homeLibrary.getNumRead()); // 1

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

homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(
  new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);
homeLibrary.add(new Book("The Eire Affair", "Fantasy", "Jasper Fforde"));
homeLibrary.add(
  new Book("The Revisionists", "Science-fiction", "thomas Mullen")
);

console.log("initial state", homeLibrary.currentlyReading); // should be The Shining book object
console.log("initial last-read", homeLibrary.lastRead); // should be null

homeLibrary.finishReading("The Shining");
console.log(
  "Currently reading, after finishing The Shining",
  homeLibrary.currentlyReading
); // should be null
console.log("Last-read, after finishing The Shining", homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading("The Revisionists");
console.log(
  "Currentky reading, After starting The Revisionists",
  homeLibrary.currentlyReading
); // should be The Revisionists book
