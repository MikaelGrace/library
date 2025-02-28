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
let bookImageInput = document.querySelector("#book-image");
const submitForm = document.querySelector("#submit-form");

newBookButton.addEventListener("click", () => {
    displayBooksDiv.innerHTML = "";
    displayBooksDiv.style.display = "none";
    
    bookForm.style.display = "block";
    //bookForm.style.gridTemplateColumns = "1fr";

});

submitForm.addEventListener("click", (e) => {

    e.preventDefault();
    const title = titleinput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const file = bookImageInput.files[0];
    let read;
    for (let i = 0; i < readStatus.length; i++) {
        if (readStatus[i].checked) {
            read = readStatus[i].value;
        }
        
    }

    //console.log(`${title} ${author} ${pages}`)
    //console.log(read);

    // addBookToLibrary(title, author, pages, read);
    // bookForm.reset();
    // bookForm.style.display = "none";

    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            addBookToLibrary(title, author, pages, read, reader.result);
            bookForm.reset();
            bookForm.style.display = "none";
        }
    }
    else {
        addBookToLibrary(title, author, pages, read, null);
        bookForm.reset();
        bookForm.style.display = "none";

    }
});

showBooksButton.addEventListener("click", () => {
    bookForm.style.display = "none";
    displayBooksDiv.style.display = "grid";
    displayBooks();
})




function Book (title, author, pages, read, image) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = image;
    this.info = function () {
        return `${title} by ${author}, ${pages}, ${read}`;
    };
}





function addBookToLibrary(title, author, pages, read, image) {
  // take params, create a book then store it in the array
  let newBook = new Book(title, author, pages, read, image);
  myLibrary.push(newBook);

};

// addBookToLibrary("Things Fall Apart", "Chinua Achebe", 300, "not yet read");
// addBookToLibrary("A prisoner of birth", "Jeffery Archer", 700, "has been read");
// addBookToLibrary("Death and the king's horseman", "Wole Soyinka", 200, "has been read");
// addBookToLibrary("Purple Hibiscus", "Chimamanda Ngozi Adiche", 400, "not yet read");


function displayBooks () {
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookStatus = document.createElement("p");
        const bookImage = document.createElement("img");
        const deleteBook = document.createElement("button");

        deleteBook.textContent = "Delete Book";

        deleteBook.addEventListener("click", () => {
            
            if (bookTitle.textContent === myLibrary[i].title) {
                myLibrary.splice(i, 1);

                //displayBooks(); //this can be used instead of removing the bookCard from the displayBooksDiv
                
            }
            displayBooksDiv.removeChild(bookCard);
        })
        bookTitle.setAttribute("class", "title");
        bookImage.setAttribute("class", "book-thumbnail");
        deleteBook.setAttribute("class", "delete-btn");
        bookCard.setAttribute("class", "card");

        bookTitle.textContent = myLibrary[i].title;
        bookAuthor.textContent = "Author: " + myLibrary[i].author;
        bookPages.textContent = "No. of Pages: " + myLibrary[i].pages + " pages";
        bookStatus.textContent = "Status: " + myLibrary[i].read;


        if (myLibrary[i].image) {
            bookImage.src = myLibrary[i].image;
            bookImage.alt = "Book Cover";
            //bookImage.classList("book-thumbnail");
            bookCard.appendChild(bookImage);
        }

        // const element = myLibrary[i].title + " by " + myLibrary[i].author + ". It has " + myLibrary[i].pages + " pages and it " + myLibrary[i].read;
        // book.textContent = element;
        //container.appendChild(book);
        
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookStatus);
        bookCard.appendChild(deleteBook);
        displayBooksDiv.appendChild(bookCard);
        
    }
}

//displayBooks();