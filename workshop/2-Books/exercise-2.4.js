// From 2.3
// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:
class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

class BookList {
  constructor() {
    //below are properties
    this.books = [];
    this.currentlyReading = null;
    this.lastRead = null;
  }

  add = (book) => {
    this.books.push(book);

    if (!this.currentlyReading) {
      this.currentlyReading = book;
    }
  };

  getNumUnRead = () => {
    let numUnread = 0;
    this.books.forEach((book) => {
      if (book.isRead === false) {
        numUnread++;
      }
    });

    return numUnread;
  };

  getNumRead = () => {
    let numRead = 0;
    this.books.forEach((book) => {
      if (book.isRead === true) {
        numRead++;
      }
    });
    return numRead;
  };

  startReading = (title) => {
    const book = this.books.find((book) => book.title === title);

    this.currentlyReading = book;
  };

  finishReading = (title) => {
    const book = this.books.find((book) => book.title === title);
    this.lastRead = book;
    this.currentlyReading = null;

    book.isRead = true;
  };
}

//Then instantiate it once as 'homeLibrary'
const homeLibrary = new BookList();

// // Books are unread by default:
homeLibrary.add(
  new Book("The Saint, the Surfer and the Ceo", "Enlightening", "Robin Sharma")
);
// // But, we can specify that we've read it:
homeLibrary.add(new Book("Homo Deus", "Enlightening", "Yuval Noah Harari"));
homeLibrary.add(new Book("Homo Sapiens", "Enlightening", "Yuval Noah Harari"));
homeLibrary.add(new Book("Shoe Dog", "Biography", "Phil Knight"));
homeLibrary.add(new Book("Steve Jobs", "Biography", "Walter Isaacson", true));

// console.log(homeLibrary.getNumRead());

// console.log(homeLibrary.getNumUnRead());

console.log("initial state", homeLibrary.currentlyReading);
console.log("initial last-read", homeLibrary.lastRead);

homeLibrary.finishReading("Shoe Dog");
console.log(
  "Currently reading, after finishing Homo Sapiens",
  homeLibrary.currentlyReading
); // should be null
console.log("Last-read, after finishing Steve Jobs", homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading("Homo Sapiens");
console.log(
  "Currently reading, After starting Homo Deus",
  homeLibrary.currentlyReading
); // should be The Revisionists book
