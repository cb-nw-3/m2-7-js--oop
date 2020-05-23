
let bookTitle = document.querySelector('#bookTitle');
let bookAuthor = document.querySelector('#bookAuthor');
let bookGenre = document.querySelector('#bookGenre');
let readStatus = document.querySelector('#readStatus');
let submitBtn = document.querySelector('#submitButton');
let currentBook = document.querySelector('#currentBook');
let lastBook = document.querySelector('#lastBook');
let startBookBtn = document.querySelector('#bookStart');
let overBookBtn = document.querySelector('#bookOver');
let libraryTitleOutput = document.querySelector('.libraryTitle');
let libraryAuthorOutput = document.querySelector('.libraryAuthor');
let libraryGenreOutput = document.querySelector('.libraryGenre');
let libraryStatusOutput = document.querySelector('.libraryRead');

let inputBookTitle;
let inputBookAuthor;
let inputBookGenre;
let inputReadStatus;
let libraryDiv;
let libraryTitle;
let libraryAuthor;
let librayrStatus;
let nextBook;
let libraryBookList;

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

function updateLibrary() {
  startBookBtn.addEventListener('click', updateCurrentBook)
  overBookBtn.addEventListener('click', updateLastBook)

  inputBookTitle = bookTitle.value;
  inputBookAuthor = bookAuthor.value;
  inputBookGenre = bookGenre.value;

  if (readStatus.checked) {
    inputReadStatus = '✔️';
  } else {
    inputReadStatus = '❌';
  }

  if (!verifyIfBookAlreadyExist(inputBookTitle) && inputBookTitle !== '') {
    if (readStatus.checked) {
      library.add(new Book(inputBookTitle, inputBookAuthor, inputBookGenre, true));
      library.currentlyReading = null;
      overBookBtn.removeEventListener('click', updateLastBook)
    } else {
      library.add(new Book(inputBookTitle, inputBookAuthor, inputBookGenre));
    }

    libraryTitle = document.createElement('div');
    libraryTitle.innerText = `${bookTitle.value}`;
    libraryTitle.classList.add('libraryBooks');
    libraryTitle.classList.add(`${library.books.length}`);
    libraryTitleOutput.appendChild(libraryTitle);

    libraryAuthor = document.createElement('div');
    if (bookAuthor.value === '') {
      inputBookAuthor = 'Unknown';
    }
    libraryAuthor.innerText = `${inputBookAuthor}`;
    libraryAuthor.classList.add('libraryBooks');
    libraryAuthor.classList.add(`${library.books.length}`);
    libraryAuthorOutput.appendChild(libraryAuthor);

    libraryGenre = document.createElement('div');
    if (bookGenre.value === '') {
      inputBookGenre = 'Unknown';
    }
    libraryGenre.innerText = `${inputBookGenre}`;
    libraryGenre.classList.add('libraryBooks');
    libraryGenre.classList.add(`${library.books.length}`);
    libraryGenreOutput.appendChild(libraryGenre);

    libraryStatus = document.createElement('div');
    libraryStatus.innerText = `${inputReadStatus}`;
    libraryStatus.classList.add('libraryBooks');
    libraryStatus.classList.add(`${library.books.length}`);
    libraryStatus.style.textAlign = 'center';
    libraryStatusOutput.appendChild(libraryStatus);

    updateCurrentBook();
  }
}

function updateCurrentBook() {
  nextBook = library.books.find(element => {
    return !element.isRead
  })

  if (nextBook !== undefined) {
    library.startReading(nextBook.title);
    currentBook.innerText = library.currentlyReading.title;
  }

  startBookBtn.removeEventListener('click', updateCurrentBook)
  overBookBtn.addEventListener('click', updateLastBook)

  if (library.currentlyReading === null) {
    overBookBtn.removeEventListener('click', updateLastBook)
  }
}

function updateLastBook() {
  library.finishReading(library.currentlyReading.title);

  currentBook.innerText = "Current Book";
  lastBook.innerText = library.lastRead.title;

  libraryBookList = document.querySelectorAll('.libraryBooks');
  let titleSearch = library.lastRead.title;
  let titleFound = document.querySelector('.libraryBooks');
  let statusFound;

  console.log(libraryBookList)
  console.log(library.lastRead.title)
  
  libraryBookList.forEach(element => {
    console.log(element.textContent, titleSearch)
    if (element.textContent === titleSearch) {
      titleFound = element;
    }

    if (titleFound.className === element.className && element.innerText === '❌') {
      statusFound = element;
    }
  })
  
  statusFound.innerText = '✔️'

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