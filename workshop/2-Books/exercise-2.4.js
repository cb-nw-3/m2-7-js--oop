// From 2.3
// Copy over all of the code from 2.3...

class Book {
	constructor(title, genre, author, isRead) {
		this.title = title;
		this.genre = genre;
		this.author = author;
		this.isRead = isRead || false;
	}
}

let book1 = new Book("The Catcher in the Rye", "Novel", "J. D. Salinger");

let book2 = new Book("Lord of the Rings", "Fantasy", "J. R. R. Tolkien");

let book3 = new Book("Lord of the Flies", "Fiction", "William Golding");

let book4 = new Book(
	"The Hunger Games",
	"Dystopian Fiction",
	"Suzanne Collins",
	true
);

let book5 = new Book(
	"Band of Brothers",
	"Non-fiction",
	"Stephen E. Ambrose",
	true
);
// console.log(book1, book2, book3, book4, book5);
class BookList {
	// Code here
	constructor() {
		this.books = [];
		this.LastRead = null;
		this.CurrentlyReading = null;
	}

	add = (book) => {
		this.books.push(book);
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

	getNumUnread = () => {
		let numUnread = 0;
		this.books.forEach((book) => {
			if (book.isRead === false) {
				numUnread++;
			}
		});

		return numUnread;
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

// let homeLibrary = new BookList();

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

homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));
homeLibrary.add(
	new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);
homeLibrary.add(new Book("The Eire Affair", "Fantasy", "Jasper Fforde"));
homeLibrary.add(
	new Book("The Revisionists", "Science-fiction", "thomas Mullen")
);

console.log("initial state", homeLibrary.currentlyReading); // should be The Shining book object
console.log("initial last-read", homeLibrary.lastRead); // should be null

homeLibrary.finishReading("The Shining");
console.log(
	"Currently reading, after finishing The Shining",
	homeLibrary.currentlyReading
); // should be null
console.log("Last-read, after finishing The Shining", homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading("The Revisionists");
console.log(
	"Currentky reading, After starting The Revisionists",
	homeLibrary.currentlyReading
); // should be The Revisionists book
