const myLibrary = [];
const container = document.querySelector(".container");
const newBookButton = document.querySelector("#new-book");
const showBooksButton = document.querySelector("#show-books");
const displayBooksDiv = document.querySelector(".display-books");
const bookForm = document.querySelector("form");
let titleinput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readStatus = document.querySelectorAll(".read-status-input");
const submitForm = document.querySelector("#submit-form");

newBookButton.addEventListener("click", () => {
    displayBooksDiv.innerHTML = "";
    displayBooksDiv.style.display = "none";
    
    bookForm.style.display = "block";

});

submitForm.addEventListener("click", (e) => {

    e.preventDefault();
    const title = titleinput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    let read;
    for (let i = 0; i < readStatus.length; i++) {
        if (readStatus[i].checked) {
            read = readStatus[i].value;
        }
        
    }

    //console.log(`${title} ${author} ${pages}`)
    console.log(read);

    addBookToLibrary(title, author, pages, read);
    bookForm.reset();
    bookForm.style.display = "none";
});

showBooksButton.addEventListener("click", () => {
    displayBooksDiv.style.display = "block";
    displayBooks();
})




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

// addBookToLibrary("Things Fall Apart", "Chinua Achebe", 300, "not yet read");
// addBookToLibrary("A prisoner of birth", "Jeffery Archer", 700, "has been read");
// addBookToLibrary("Death and the king's horseman", "Wole Soyinka", 200, "has been read");
// addBookToLibrary("Purple Hibiscus", "Chimamanda Ngozi Adiche", 400, "not yet read");


function displayBooks () {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement("p");
        const element = myLibrary[i].title + " by " + myLibrary[i].author + ". It has " + myLibrary[i].pages + " pages and it " + myLibrary[i].read;
        book.textContent = element;
        //container.appendChild(book);
        displayBooksDiv.appendChild(book);
        
    }
}

//displayBooks();