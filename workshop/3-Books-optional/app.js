// element selection
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
// initialize variable
let inputBookTitle;
let inputBookAuthor;
let inputBookGenre;
let inputReadStatus;
let libraryTitle;
let libraryAuthor;
let libraryStatus;
let nextBook;
let libraryBookList;

// class definition
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

//create library
const library = new BookList();
// new book button function
submitBtn.addEventListener('click', updateLibrary)

function updateLibrary() {
  // add start and over book button function
  startBookBtn.addEventListener('click', updateCurrentBook)
  overBookBtn.addEventListener('click', updateLastBook)
  // grab input value
  inputBookTitle = bookTitle.value;
  inputBookAuthor = bookAuthor.value;
  inputBookGenre = bookGenre.value;
  // checkmark if checked and X if not
  if (readStatus.checked) {
    inputReadStatus = '✔️';
  } else {
    inputReadStatus = '❌';
  }
  // add the book if title is new
  if (!verifyIfBookAlreadyExist(inputBookTitle) && inputBookTitle !== '') {
    // check if book is read
    if (readStatus.checked) {
      // add book to library
      library.add(new Book(inputBookTitle, inputBookAuthor, inputBookGenre, true));
      // remove book from currently reading
      library.currentlyReading = null;
      // remove over button function if no book in currently reading
      overBookBtn.removeEventListener('click', updateLastBook)
    } else {
      // add book normally if not read
      library.add(new Book(inputBookTitle, inputBookAuthor, inputBookGenre));
    }
    // create and add book title in library
    libraryTitle = document.createElement('div');
    libraryTitle.innerText = `${bookTitle.value}`;
    libraryTitle.classList.add('libraryBooks');
    libraryTitle.classList.add(`${library.books.length}`);
    libraryTitleOutput.appendChild(libraryTitle);
    // create and add book author in library
    libraryAuthor = document.createElement('div');
    // author unknown if not specified
    if (bookAuthor.value === '') {
      inputBookAuthor = 'Unknown';
    }
    libraryAuthor.innerText = `${inputBookAuthor}`;
    libraryAuthor.classList.add('libraryBooks');
    libraryAuthor.classList.add(`${library.books.length}`);
    libraryAuthorOutput.appendChild(libraryAuthor);
    // create and add book genre in library
    libraryGenre = document.createElement('div');
    // unknown genre if not specified
    if (bookGenre.value === '') {
      inputBookGenre = 'Unknown';
    }
    libraryGenre.innerText = `${inputBookGenre}`;
    libraryGenre.classList.add('libraryBooks');
    libraryGenre.classList.add(`${library.books.length}`);
    libraryGenreOutput.appendChild(libraryGenre);
    // create and add book status in library
    libraryStatus = document.createElement('div');
    libraryStatus.innerText = `${inputReadStatus}`;
    libraryStatus.classList.add('libraryBooks');
    libraryStatus.classList.add(`${library.books.length}`);
    libraryStatus.style.textAlign = 'center';
    libraryStatusOutput.appendChild(libraryStatus);
    // function call that shows us current book
    updateCurrentBook();
    // empty input fields
    bookTitle.value = '';
    bookAuthor.value = '';
    bookGenre.value = '';
    readStatus.checked = false;
  }
}

function updateCurrentBook() {
  // find the next unread book
  nextBook = library.books.find(element => {
    return !element.isRead
  })
  // if unread book
  if (nextBook !== undefined) {
    // add said book to currentyl reading normally
    library.startReading(nextBook.title);
    // update innerText
    currentBook.innerText = library.currentlyReading.title;
  }
  // remove start button event listener and add over function
  startBookBtn.removeEventListener('click', updateCurrentBook)
  overBookBtn.addEventListener('click', updateLastBook)
  // if currently reading is empty remove over button function
  if (library.currentlyReading === null) {
    overBookBtn.removeEventListener('click', updateLastBook)
  }
}

function updateLastBook() {
  // add last book normally with class method
  library.finishReading(library.currentlyReading.title);
  // update inner text in last book and current book section
  currentBook.innerText = "Current Book";
  lastBook.innerText = library.lastRead.title;
  // select all properties in library
  libraryBookList = document.querySelectorAll('.libraryBooks');
  // set different variables
  let titleSearch = library.lastRead.title;
  // initial set-up so titleFound.className is not undefined
  let titleFound = document.querySelector('.libraryBooks');
  let statusFound;
  // loop through all
  libraryBookList.forEach(element => {
    // check for good title
    if (element.textContent === titleSearch) {
      // grab that title element
      titleFound = element;
    }
    // check if this element className and X
    if (titleFound.className === element.className && element.innerText === '❌') {
      // grab the status element
      statusFound = element;
    }
  })
  // change good status after loop
  statusFound.innerText = '✔️'
  // remove over button function and add start button function
  overBookBtn.removeEventListener('click', updateLastBook)
  startBookBtn.addEventListener('click', updateCurrentBook)
}

function verifyIfBookAlreadyExist() {
  // initialize checker
  let checker = false;
  // loop through library books 
  library.books.forEach(element => {
    // book title is already present
    if (element.title === bookTitle.value) {
      // update checker
      checker = true
    }
  })
  // return checker
  return checker
}