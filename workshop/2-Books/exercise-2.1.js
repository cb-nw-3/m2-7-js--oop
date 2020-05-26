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
        this.isRead = isRead || false; 
    }
}

const book1 = new Book('Pride and Prejudice','Fiction','Jane Austen');
const book2 = new Book('Gone with the Wind','Novel','Margaret Mitchell');
const book3 = new Book('Little Women','Historical Fiction','Louisa May Alcott');
const book4 = new Book('The Alchemist','Drama','Paulo Coelho',false);
const book5 = new Book('The Other Boleyn Girl','Biographical Fiction','Philippa Gregory',true);

console.log(book1, book2, book3, book4, book5);
