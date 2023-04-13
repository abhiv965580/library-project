let myLibrary = [];
let table = document.querySelector("table");
const newBtn = document.querySelector("#new-btn");
const form = document.querySelector("form");

function Book(title, author, pages, readStatus) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.readStatus = readStatus;
}

const theHobbits = new Book(
    "The Hobbits",
    "J.R.R. Tolkiens",
    295, 
    "Read"
);

const harryPotter = new Book(
  "Harry Potter and The Cursed Child",
  "J.K. Rowling",
  345,
  "Unread"
);
myLibrary.push(theHobbits, harryPotter);

function addBookToLibrary() {
  let title = document.querySelector("#book-name").value;
  let author = document.querySelector("#author-name").value;
  let pages = document.querySelector("#pages").value;
  let readStatus = document.querySelector(
    'input[name="read_status"]:checked'
  ).value;
  let newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  displayBooks();
  form.style.display = "none";
}

function displayBooks() {
  table.innerHTML = `<tr class='table-heading'>
    <th>Book Name</th><th>Author Name</th><th>Pages</th>
    <th>Read Status</th></tr>`;
  for (var i = 0; i < myLibrary.length; i++) {
    rowEl = document.createElement("tr");
    rowEl.innerHTML =`
    <td>${myLibrary[i].title}</td>
    <td>${myLibrary[i].author}</td>
    <td>${myLibrary[i].pages}</td>
    <td>${myLibrary[i].readStatus}</td>
    <button class="rem-btn" onclick="removeBook(${i})">Remove</button>
    `;
    table.appendChild(rowEl);
  }
}

newBtn.addEventListener("click", () => {
  form.style.display = "block";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
});

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

displayBooks();
