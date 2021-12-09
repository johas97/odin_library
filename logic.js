let myLibrary = [];
const containerBooks = document.querySelector(".displayBookBox");

function Book(title, author, pages, readBook) {

    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.readBook = readBook; 
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addBookData (bookElement, div) {
  bookTitle = document.createElement("h2");
  bookTitle.textContent = "Title: " + bookElement.title 
  div.appendChild(bookTitle);

  bookAuthor = document.createElement("h3");
  bookAuthor.textContent = "Author: " + bookElement.author 
  div.appendChild(bookAuthor);

  bookPages = document.createElement("h3");
  bookPages.textContent = "Pages: " + bookElement.pages 
  div.appendChild(bookPages);

  bookRead = document.createElement("h3");
  bookRead.textContent = "Read book: " + bookElement.readBook 
  div.appendChild(bookRead);

  }

function printBooks(bookArray) {

//Erase old books
    containerBooks.innerHTML = "";
//Add new books 

    for (i=0; i < bookArray.length; i++) {
        const div = document.createElement("div");
        div.classList.add("book");
        containerBooks.appendChild(div);

       addBookData(bookArray[i], div);
    

    }
}


// Fetching form data 
/*

*/

let harryP = new Book("Harry Potter", "JK Rowling", 450, true);

let harrya = new Book("Harry Potter", "JK Rowling", 450, true);

let harryf = new Book("Harry Potter", "JK Rowling", 450, true);

let harryh = new Book("Harry Potter", "JK Rowling", 450, true);

const btn = document.querySelector(".bookSubmittButton");
btn.addEventListener("click", () => {

  formData =  Array.from(document.querySelectorAll('input')).reduce((acc,input) => ({...acc, [input.id]: input.value}), {});
  myLibrary.push(formData);
  printBooks(myLibrary);
  
});

printBooks(myLibrary);