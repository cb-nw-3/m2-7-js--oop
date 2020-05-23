// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

see below


// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class.
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

class Book {
  constructor(name, genre, author, isRead){
      this.title = name;
      this.genre = genre;
      this.author = author;
      this.isRead = isRead;
  }

}

class BookList {
  constructor(book){
    this.books = [];
    this.lastRead = null;
    this.currentlyReading = null;
  }
  add = (book) =>{
    this.books.push(book);
  }
  getNumRead = () =>{
    let i=0;
    let sum =0;
    for(i=0; i<=this.books.length - 1; i++){
      if(this.books[i].isRead){
        sum +=1;
      }
    }console.log(sum);
  }
  getNumUnread = () =>{
    let i=0;
    let sum = 0;
    for(i=0; i<=this.books.length-1; i++){
      if(this.books[i].isRead !== true){
        sum += 1;
      } 
    }console.log(sum);
  }
}
let homeLibrary = new BookList();
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));

homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);

console.log(homeLibrary.getNumUnread()); 
console.log(homeLibrary.getNumRead()); 
