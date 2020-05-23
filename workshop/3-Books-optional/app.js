
let bookTitle = document.querySelector('#bookTitle');
let bookAuthor = document.querySelector('#bookAuthor');
let bookGenre = document.querySelector('#bookGenre');
let readStatus = document.querySelector('#readStatus');
let submitBtn = document.querySelector('#submitButton');
let currentBook = document.querySelector('#currentBook');
let lastBook = document.querySelector('#lastBook');
let startBookBtn = document.querySelector('#bookStart');
let overBookBtn = document.querySelector('#bookOver');
let libraryOutput = document.querySelector('.library');

let inputBookTitle;
let inputBookAuthor;
let inputBookGenre;
let inputReadStatus;
let libraryDiv;
let nextBook;

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

const library = new BookList();

submitBtn.addEventListener('click', updateLibrary)
startBookBtn.addEventListener('click', updateCurrentBook)
overBookBtn.addEventListener('click', updateLastBook)

function updateLibrary() {
  inputBookTitle = bookTitle.value;
  inputBookAuthor = bookAuthor.value;
  inputBookGenre = bookGenre.value;
  if (readStatus.checked) {
    inputReadStatus = ':check:';
  } else {
    inputReadStatus = ':X:';
  }
  if (!verifyIfBookAlreadyExist(inputBookTitle)) {
    if (readStatus.checked) {
      library.add(new Book(inputBookTitle, inputBookAuthor, inputBookGenre, true));
    } else {
      library.add(new Book(inputBookTitle, inputBookAuthor, inputBookGenre));
    }

    if (library.currentlyReading) {
      updateCurrentBook();
    }
    if (library.lastRead) {
      updateLastBook();
    }

    libraryDiv = document.createElement('div');
    if (!inputBookAuthor) {
      libraryDiv.innerText = `${bookTitle.value} by ${"Unknown"} - ${inputReadStatus}`;
    } else {
      libraryDiv.innerText = `${bookTitle.value} by ${bookAuthor.value} - ${inputReadStatus}`;
    }
    libraryOutput.appendChild(libraryDiv);
  }
}

function updateCurrentBook() {
  nextBook = library.books.find(element => {
    return !element.isRead
  })
  console.log(nextBook)
  if (nextBook !== undefined) {
    library.startReading(nextBook.title);
    currentBook.innerText = library.currentlyReading.title;
  
  }
  startBookBtn.removeEventListener('click', updateCurrentBook)
  overBookBtn.addEventListener('click', updateLastBook)

}

function updateLastBook() {
  library.finishReading(library.currentlyReading.title);
  currentBook.innerText = "No book";
  lastBook.innerText = library.lastRead.title;

  overBookBtn.removeEventListener('click', updateLastBook)
  startBookBtn.addEventListener('click', updateCurrentBook)
  
}

function verifyIfBookAlreadyExist() {
  let checker = false;
  library.books.forEach(element => {
    if (element.title === bookTitle.value) {
      checker = true
    }
  })
  return checker
}