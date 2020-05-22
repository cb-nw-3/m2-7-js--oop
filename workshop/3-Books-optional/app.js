class Book {
  constructor(title = '', genre = '', autor = 'unknown', isRead = false) {
    this.title = title;
    this.genre = genre;
    this.autor = autor;
    this.isRead = isRead;
    this.cover = null;
  }
}

class BookList {
  // Code here
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }
  add = (book) => {
    this.books.push(book);
    if (this.currentlyReading == null) {
      this.startReading(book.title);
    }
  };
  getNumRead = () => {
    let count = 0;
    this.books.forEach((elemet) => {
      if (elemet.isRead) {
        count++;
      }
    });
    return count;
  };
  getNumUnread = () => {
    let count = 0;
    this.books.forEach((elemet) => {
      if (!elemet.isRead) {
        count++;
      }
    });
    return count;
  };
  startReading = (title) => {
    if (this.currentlyReading === null) {
      // this.currentlyReading = [...(this.books.filter((elemet) => elemet.title === title))];
      [this.currentlyReading] = this.books.filter(
        (elemet) => elemet.title === title
      );
    }
  };
  finishReading = (title) => {
    this.currentlyReading.isRead = true;
    this.lastRead = this.currentlyReading;
    this.currentlyReading = null;
  };
}

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

const BTNSUBMIT = document.querySelector('button');
BTNSUBMIT.addEventListener('click', submitBook);
// console.log(BTNSUBMIT);

function refreshRows() {}

function submitBook(e) {
  e.preventDefault();
  const book = new Book();
  const INPUTS = document.querySelectorAll('input');
  book.title = INPUTS[0].value;
  book.genre = INPUTS[1].value;
  book.autor = INPUTS[2].value;
  book.isRead = INPUTS[3].checked;
  // console.log(book);
  homeLibrary.books.push(book);
  refreshRows();
  console.log(homeLibrary.books);
}
