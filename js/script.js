const myLibrary = [];
const container = document.querySelector(".container");




function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages}, ${read}`;
    };
}





function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

};

addBookToLibrary("Things Fall Apart", "Chinua Achebe", 300, "not yet read");
addBookToLibrary("A prisoner of birth", "Jeffery Archer", 700, "has been read");
addBookToLibrary("Death and the king's horseman", "Wole Soyinka", 200, "has been read");
addBookToLibrary("Purple Hibiscus", "Chimamanda Ngozi Adiche", 400, "not yet read");


function displayBooks () {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement("p");
        const element = myLibrary[i].title;
        book.textContent = element;
        container.appendChild(book);
        
    }
}

displayBooks();