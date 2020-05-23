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
  constructor(title = "", genre = "", autor = "unknown", isRead = false) {
    this.title = title;
    this.genre = genre;
    this.autor = autor;
    this.isRead = isRead;
  }
}

let book1 = new Book(
  "The Hunt for Red October (1984)",
  "Techno-thrillerMilitary fictionSpy fictionHistorical fiction",
  "Tom Clancy",
  true
);

let book2 = new Book(
  "Snow white",
  "fairy tale fictionHistorical fiction",
  "The Brothers Grimm",
  true
);

let book3 = new Book(
  "Perfume: The Story of a Murderer",
  "Horror fiction, mystery, magic realism, absurd",
  "Patrick Süskind",
  true
);

let book4 = new Book(
  "I've Loved You Since Forever",
  "Children's Adoption Books",
  "Suzie Mason "
);

let book5 = new Book("Brave new world", "Fiction");

console.log(book1, book2, book3, book4, book5);

// Book {
//   title: 'The Hunt for Red October (1984)',
//   genre: 'Techno-thrillerMilitary fictionSpy fictionHistorical fiction',
//   autor: 'Tom Clancy',
//   isRead: true
// } Book {
//   title: 'Snow white',
//   genre: 'fairy tale fictionHistorical fiction',
//   autor: 'The Brothers Grimm',
//   isRead: true
// } Book {
//   title: 'Perfume: The Story of a Murderer',
//   genre: 'Horror fiction, mystery, magic realism, absurd',
//   autor: 'Patrick Süskind',
//   isRead: true
// } Book {
//   title: "I've Loved You Since Forever",
//   genre: "Children's Adoption Books",
//   autor: 'Suzie Mason ',
//   isRead: false
// } Book {
//   title: 'Brave new world',
//   genre: 'Fiction',
//   autor: 'unknown',
//   isRead: false
// }
