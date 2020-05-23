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
}

let homeLibrary = new BookList();
// console.log(homeLibrary);

// Exercise 2.3
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

const homeLibrary = new BookList();

// Books are unread by default:
homeLibrary.add(new Book("The Shining", "Horror", "Stephen King"));
homeLibrary.add(new Book("American Gods", "Fiction", "Neil Gaiman"));

// But, we can specify that we've read it:
homeLibrary.add(
	new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke", true)
);

// At this point, we should have 2 unread books, and 1 read book:
console.log(homeLibrary.getNumUnread()); // 2
console.log(homeLibrary.getNumRead()); // 1
