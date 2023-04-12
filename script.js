let myLibrary = [];
let table = document.querySelector('table');
let tableRow;
let rowData;
const btn = document.querySelector('button');

function Book(title, author,pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

const theHobbits = new Book("The Hobbits","J.R.R. Tolkiens",295);
const harryPotter = new Book("Harry Potter and The Cursed Child","J.K. Rowling", 345);
myLibrary.push(theHobbits,harryPotter);

Book.prototype.info = function () {
    return(`${this.title} by ${this.author}, ${this.pages} pages, not read yet`);
}

function addBookToLibrary() {
    let bookName = prompt("Enter the book to add to your library:");
    let bookAuthor = prompt("Enter the author name:");
    let bookPages = prompt("Enter the number of pages:");
    let newBook = new Book(bookName, bookAuthor, bookPages);
    myLibrary.push(newBook);
}

function writeColumn(data) {
    console.log(data);
    let column = document.createElement("td");
    column.textContent = data;
    rowData.appendChild(column);
}

function displayBooks() {
    for(var i = 0; i < myLibrary.length; i++) {
        tableRow = document.createElement("tr");
        tableRow.className = `book${i}`;
        table.appendChild(tableRow);
        rowData = document.querySelector(`.book${i}`);
        writeColumn(myLibrary[i].title);
        writeColumn(myLibrary[i].author);
        writeColumn(myLibrary[i].pages);
    }
}

btn.addEventListener("click", addBookToLibrary);

displayBooks();
