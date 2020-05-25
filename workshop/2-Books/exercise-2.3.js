// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false; //is a bool, if not read then false
  }
}

let book1 = new Book(
  "Harry Potter and the Philosopher's Stone",
  "Fantasy Adventure", 
  "J.K Rowling",
  true
  )

let book2 = new Book(
  "Eragon",
  "Fantasy", 
  "Christopher Paolini",
  true
  )
let book3 = new Book(
  "1984",
  "Dystopian Future", 
  "George Orwell",
  true
  )
let book4 = new Book(
  "Oliver Twist",
  "Serial novel",
  "Charles Dickens", 
  true
  )
let book5 = new Book(
  "The Big Short: Inside the Doomsday Machine",
  "non-fiction", 
  "Michael Lewis",
  )

console.log(book1, book2, book3, book4, book5);

class BookList {
  constructor() {
    this.books = [];
    this.lastReady = null;
    this.currentlyReadying = null;
  }

  add = (book) => {
    this.books.push(book);
  }

  //iterate over book array and check the isRead property
  getNumRead = () => {
    let count = 0;
    this.books.forEach(book => {
      if(book.isRead == true) {
        count++;
      }
    })
    return count;
  }

  //same as the above
  getNumUnread = () => {
    let count = 0;
    this.books.forEach(book => {
      if(book.isRead == false) {
        count++;
      }
    })
    return count;
  }
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

//console.log(homeLibrary);



// Books are unread by default:
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));


// But, we can specify that we've read it:
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);

console.log(homeLibrary);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
