// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {

    constructor  (initTitle, initGenre, initAuthor, initIsRead = false) {
        this.title = initTitle;
        this.genre = initGenre;
        this.author = initAuthor;
        this.isRead = initIsRead;
    }

}

let book1 = new Book(initTitle="Hamlet", initGenre="Tragedy", initAuthor = "Shakespeare" );
let book2 = new Book(initTitle="Romeo & Juliet", initGenre="Tragedy, Romance", initAuthor = "Shakespeare", initIsRead=true );
let book3 = new Book(initTitle="Hamlet2", initGenre="Tragedy", initAuthor = "Shakespeare" );
let book4 = new Book(initTitle="Hamlet3", initGenre="Tragedy", initAuthor = "Shakespeare" );
let book5 = new Book(initTitle="The Firm", initGenre="Law", initAuthor = "John Grisham" );


console.log(book1, book2, book3, book4, book5);
