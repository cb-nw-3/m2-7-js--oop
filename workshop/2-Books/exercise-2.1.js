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
    constructor(title, genre, author, isRead){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead;
        if(this.isRead === undefined){
            this.isRead = false;
        }
    }
}

let book1 = new Book("Little Fish","Drama", "Casey Plett", true)
let book2 = new Book("Communist Manifesto", "non-fiction", "Karl Marx")
let book3 = new Book("Harry Potter", "fantasy", "A TERF", false)
let book4 = new Book("Rise of the VideoGame Zinesters", "non-fiction", "Anna Anthropy", true)
let book5 = new Book("The Queer Art of Failure", "non-fiction", "Jack Hablerstam")

console.log(book1, book2, book3, book4, book5);
