import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }
    Ї
printInfo() {
        console.log(`Назва: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Рік видання: ${this.year}`);
        console.log(`Формат файлу: ${this.fileFormat}`);
    }
}

export default EBook;