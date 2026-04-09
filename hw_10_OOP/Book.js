//     Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
//     В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. 
// Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook



// const car1 = new Car("Toyota", 2020);
// car1.showInfo();
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     printInfo() {
//         console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`);
//     }
// }
// // class Car {
// //     constructor(brand, year) {
// //         this.brand = brand;
// //         this.year = year;
// //     }
// //     showInfo() {
// //         console.log(this.brand + " " + this.year);
// //     }
// // }
// printInfo() {
//     console.log(`Назва: ${this.title}`);
//     console.log(`Автор: ${this.author}`);
//     console.log(`Рік видання: ${this.year}`);
// }

// static findOldestBook(books) {};
// export default Book;

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value !== "" && value != null) {
      this._title = value;
    } else {
      console.log("Назва: не може бути пустою");
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value !== "" && value != null) {
      this._author = value;
    } else {
      console.log("Автор: не може бути пустим");
    }
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (Number.isInteger(value) && value > 0) {
      this._year = value;
    } else {
      console.log("Рік видання: має бути цілим числом більше 0");
    }
  }

  printInfo() {
    console.log("Назва:", this.title);
    console.log("Автор:", this.author);
    console.log("Рік видання:", this.year);
  }

  static findOldestBook(books) {
    let oldestBook = books[0];
    for (let i = 1; i < books.length; i++) {
      if (books[i].year < oldestBook.year) {
        oldestBook = books[i];
      }
    }
    return oldestBook;
  }
}

export default Book;




