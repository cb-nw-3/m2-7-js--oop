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
}
//Then instantiate it once as 'homeLibrary'
const homeLibrary = new BookList();

//
// // The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

// // Books are unread by default:
homeLibrary.add(
  new Book("The Saint, the Surfer and the Ceo", "Enlightening", "Robin Sharma")
);
// // But, we can specify that we've read it:
homeLibrary.add(
  new Book("Homo Deus", "Enlightening", "Yuval Noah Harari", true)
);
homeLibrary.add(
  new Book("Homo Sapiens", "Enlightening", "Yuval Noah Harari", true)
);
homeLibrary.add(new Book("Shoe Dog", "Biography", "Phil Knight", true));
homeLibrary.add(new Book("Steve Jobs", "Biography", "Walter Isaacson", true));

console.log(homeLibrary.getNumRead());

console.log(homeLibrary.getNumUnRead());
