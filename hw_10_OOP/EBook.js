// import Book from './Book.js';
// class EBook extends Book {
//     constructor(title, author, year, fileFormat) {
//         super(title, author, year);
//         this.fileFormat = fileFormat;
//     }
//     Ї
// printInfo() {
//         console.log(`Назва: ${this.title}`);
//         console.log(`Автор: ${this.author}`);
//         console.log(`Рік видання: ${this.year}`);
//         console.log(`Формат файлу: ${this.fileFormat}`);
//     }
// }


import Book from "./Book.js";

class EBook extends Book {
  constructor(title, author, year, formatFile) {
    super(title, author, year);
    this.formatFile = formatFile;
  }

  get formatFile() {
    return this._formatFile;
  }

  set formatFile(value) {
    if (value !== "" && value != null) {
      this._formatFile = value;
    } else {
      console.log("не може бути пустим");
    }
  }

  printInfo() {
    console.log("Назва:", this.title);
    console.log("Автор:", this.author);
    console.log("Рік видання:", this.year);
    console.log("Формат файлу:", this.formatFile);
  }

  static createEBookFromBook(book, formatFile) {
    return new EBook(book.title, book.author, book.year, formatFile);
  }
}

export default EBook;
