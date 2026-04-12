// import Book from './Book.js';
// import EBook from './EBook.js';

// const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
// const book2 = new Book("Таємнича історія Біллі Міллігана", "Деніел Кіз", 1981);
// const book3 = new Book("Гаррі Поттер і смертельні реліквії", "Дж. К. Роулінг", 2007);

// const ebook1 = new EBook("1984", "Джордж Орвелл", 1949, "EPUB");


// import Book from './Book.js';
// import EBook from './EBook.js';

// const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
// const book2 = new Book("Таємнича історія Біллі Міллігана", "Деніел Кіз", 1981);
// const book3 = new Book("Гаррі Поттер і смертельні реліквії", "Дж. К. Роулінг", 2007);
// book1.printInfo();
// console.log("----------------------------------");
// book2.printInfo();
// console.log("----------------------------------");
// book3.printInfo();
// console.log("----------------------------------");
//const ebook1 = new EBook("1984", "Джордж Орвелл", 1949, "EPUB");

import Book from "./Book.js";
import EBook from "./EBook.js";

// Створюємо кілька звичайних книг
const book1 = new Book("Дон Кіхоот з Ламанчі", "Мігель де Сервантес", 1615);
const book2 = new Book("Таємнича історія Біллі Міллігана", "Даніел Кіз", 1981);
const book3 = new Book("Гаррі Поттер і смертельні реліквії", "Дж. К. Роулінг", 2007);

// Викликаємо метод printInfo для кожної книги
console.log("Осеновні книги:");
book1.printInfo();
console.log("----------------------------------");

book2.printInfo();
console.log("----------------------------------");

book3.printInfo();
console.log("----------------------------------");

const ebook1 = new EBook("1984", "Джордж Орвел", 1949, "EPUB");

console.log("Електронна книга:");
ebook1.printInfo();
console.log("----------------------------------");

book1.title = "Якась нова історія (нова книга)";
ebook1.formatFile = "EPUB";

console.log("Нова назва book1:", book1.title);
console.log("Новий формат ebook1:", ebook1.formatFile);
console.log("----------------------------------");

const books = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(books);

console.log("Найдавніша книга:");
oldestBook.printInfo();
console.log("----------------------------------");

const newEBook = EBook.createEBookFromBook(book2, "MOBI");

console.log("EBook, створена зі звичайної книги:");
newEBook.printInfo();