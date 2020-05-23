const bookTitleInput = document.querySelector("#bookTitle");
const bookAuthorInput = document.querySelector("#bookAuthor");
const bookGenreInput = document.querySelector("#bookGenre");

const clearBtn = document.querySelector(".clear");
const submitBtn = document.querySelector("#submitBtn");
const readCheckbox = document.querySelector("#read-checkbox");

clearBtn.addEventListener("click", toggleBookForm);
submitBtn.addEventListener("click", submitBook);

bookTitleInput.addEventListener("blur", getData);
bookAuthorInput.addEventListener("blur", getData);
bookGenreInput.addEventListener("blur", getData);

let bookTitle = bookTitleInput.value;
let bookAuthor = bookAuthorInput.value;
let bookGenre = bookGenreInput.value;
let bookIsRead = false;

function submitBook() {
  event.preventDefault();

  if (readCheckbox.checked) {
    bookIsRead = true;
  }
  homeLibrary.add(new Book(bookTitle, bookAuthor, bookGenre, bookIsRead));

  let newBookIndex = homeLibrary.books.length - 1;
  showBookOnShelf(homeLibrary.books[newBookIndex], bookshelf);

  toggleBookForm();
  alert(`${bookTitle} has been added to your collection!`);
}

function getData() {
  bookTitle = bookTitleInput.value;
  bookAuthor = bookAuthorInput.value;
  bookGenre = bookGenreInput.value;
  bookIsRead = false;
}
