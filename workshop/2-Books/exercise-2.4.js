// From 2.3
// Copy over all of the code from 2.3...


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

//console.log(book1, book2, book3, book4, book5);

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  add = (book) => {
    this.books.push(book);

    //when a book is added it will automatically be the book being currently read
    if(!this.currentlyReading) {
      this.currentlyReading = book;
    }

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

  startReading = (title) => {
    //need to find the first book in the booklist array
    let firstBook = this.books.find(item => item.title === title);
    this.currentlyReading = firstBook;
  }

  finishReading = (title) => {
    //lookup the title of the book in the booklist
    let finishBook = this.books.find(item => item.title === title);
    this.lastRead = finishBook;
    finishBook.isRead = true; //the read prop is now true.
    this.currentlyReading = null; // you are no longer reading any books.
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

//added the book
console.log(homeLibrary);

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
