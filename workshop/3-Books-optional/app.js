class Book {
  constructor(title, genre, author, isRead = false) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }

  add = (book) => {
    this.books.push(book);
    book.shelfIndex = this.books.length;
    if (this.books.length === 1) {
      this.currentlyReading = book;
    }
  };

  getNumRead = () => {
    let booksRead = 0;
    this.books.forEach(function (book) {
      if (book.isRead) {
        booksRead += 1;
      }
    });
    return booksRead;
  };

  getNumUnread = () => {
    let booksUnread = 0;
    this.books.forEach(function (book) {
      if (!book.isRead) {
        booksUnread += 1;
      }
    });
    return booksUnread;
  };

  startReading = (bookIndex) => {
    let bookObject = this.books.find((book) => book.shelfIndex === bookIndex);
    this.currentlyReading = bookObject;
  };

  finishReading = (bookIndex) => {
    this.currentlyReading = null;
    let bookObject = this.books.find((book) => book.shelfIndex === bookIndex);

    this.lastRead = bookObject;
  };
}

const bookshelf = document.querySelector(".bookRow");
const currentlyReadingShelf = document.querySelector(".currently-reading");
const lastReadShelf = document.querySelector(".last-read");
const addBookFormHtml = document.querySelector(".addBookForm");
const addBookBtn = document.querySelector(".addBook");
addBookBtn.addEventListener("click", toggleBookForm);

const homeLibrary = new BookList();

homeLibrary.add(
  new Book("The Sisters Brothers", "Western", "Patrick DeWitt", true)
);
homeLibrary.add(
  new Book("Children of Time", "Sci-Fi", "Adrian Tchaikovsky", true)
);
homeLibrary.add(new Book("The Choirboys", "Crime", "Joseph Wambaugh", false));
homeLibrary.add(
  new Book("Conversations with Friends", "Fiction", "Sally Rooney", true)
);
homeLibrary.add(
  new Book("The Luminaries", "Historical Fiction", "Eleanor Catton")
);
homeLibrary.add(new Book("Machine of Death", "Sci-Fi", "Ryan North et al"));

homeLibrary.books.forEach(function (book) {
  showBookOnShelf(book, bookshelf);
});

function startReading(event) {
  bookIndex = event.target.className;
  homeLibrary.startReading(Number(bookIndex));

  //if it's not the first item, remove the old item
  if (currentlyReadingShelf.children.length !== 0) {
    removeChildrenCustom(currentlyReadingShelf);
  }

  //show new element
  showBookOnShelf(homeLibrary.currentlyReading, currentlyReadingShelf);
}

function finishedReading(event) {
  removeChildrenCustom(currentlyReadingShelf);

  if (lastReadShelf.children.length !== 0) {
    removeChildrenCustom(lastReadShelf);
  }

  bookIndex = event.target.className;
  homeLibrary.finishReading(Number(bookIndex));
  //show new element
  showBookOnShelf(homeLibrary.lastRead, lastReadShelf);
}

//function that takes a book's data and adds it as an element on the bookshelf
function showBookOnShelf(book, parent) {
  let newBook = document.createElement("div");
  newBook.classList.add("bookItem");

  let bookTitleElement = document.createElement("h3");
  bookTitleElement.innerText = book.title;
  newBook.appendChild(bookTitleElement);

  let bookCoverElement = document.createElement("div");
  bookCoverElement.classList.add("cover");
  newBook.appendChild(bookCoverElement);

  let bookGenreElement = document.createElement("h4");
  bookGenreElement.innerText = book.genre;
  newBook.appendChild(bookGenreElement);

  let bookAuthorElement = document.createElement("h4");
  bookAuthorElement.innerText = book.author;
  newBook.appendChild(bookAuthorElement);

  switch (parent) {
    case currentlyReadingShelf:
      let finishedReadingBtn = document.createElement("button");
      finishedReadingBtn.innerText = "Finshed Reading";
      finishedReadingBtn.classList.add(book.shelfIndex);
      newBook.appendChild(finishedReadingBtn);
      finishedReadingBtn.addEventListener("click", finishedReading);
      break;
    case bookshelf:
      let startReadBtn = document.createElement("button");
      startReadBtn.innerText = "Start Reading";
      startReadBtn.classList.add(book.shelfIndex);
      newBook.appendChild(startReadBtn);
      startReadBtn.addEventListener("click", startReading);
      break;
    default:
      let finishedDate = document.createElement("div");
      let dateTxt = String(new Date());
      let dateArr = dateTxt.split(" ");

      //let's be ghetto i'm running out of time
      dateArr.pop();
      dateArr.pop();
      dateArr.pop();
      finishedDate.innerText = `Finshed Reading on:\n ${dateArr.join(" ")}`;
      newBook.appendChild(finishedDate);
  }
  //return newBook;
  parent.appendChild(newBook);
}

function removeChildrenCustom(shelf) {
  for (let i = 0; i < shelf.children.length; i++) {
    currentChild = shelf.children[0];
    shelf.removeChild(currentChild);
  }
}

function toggleBookForm() {
  addBookFormHtml.classList.toggle("addBookForm");
  addBookFormHtml.classList.toggle("showBookForm");
}
