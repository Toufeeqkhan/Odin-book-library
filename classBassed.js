
const bookContainer = document.getElementById("books-container")
const newBookButton = document.getElementById("newBookButton")
let dialogDiv = document.getElementById("dialog")

let bookCountDiv = document.getElementById("book-count")
let progressCountDiv = document.getElementById("progress-count")
let readCountDiv = document.getElementById("read-count")
let futureCountDiv = document.getElementById("future-count")

let count = 0,
    inProgressCounter = 0,
    inReadCounter = 0,
    inFutureCounter = 0
    
    // Show or unShow the dialog-box
    document.addEventListener("DOMContentLoaded", function () {
        dialogDiv.classList.add('show')
        dialogDiv.showModal()
    });
    
    newBookButton.addEventListener('click', () => {
        dialogDiv.showModal()
    })

class Book {
    constructor(name, author, pages, status) {
        this.name = name
        this.author = author
        this.pages = pages
        this.status = status
    }

}

class Library {
    constructor() {
        this.books = []
    }

    showBook(book) {
        let newBookDiv = document.createElement('div')
        newBookDiv.classList.add('book')
        newBookDiv.innerHTML = `
                                <div class = "book-top">
                                <p class = "book-name">${book.name}</p>
                                <p class = "book-author">By: ${book.author}</p>
                                </div>
                                <div class = "book-bottom">
                                <p class = "book-page">#${book.pages}</p>
                                <p class = "book-status">${book.status}</p>
                                </div>`;

        bookContainer.appendChild(newBookDiv)
    }

    addBook(book) {
        this.books.push(book)
        this.showBook(book)
       this.count(book)
    }

    removeBook(name) {
        this.books.forEach(e => e.name === name ? this.books.splice(this.books.indexOf(e), 1) : 'Not found')
    }

    count(book){
        count++
        bookCountDiv.textContent = count
        switch(book.status){
            case 'In Progress':
                inProgressCounter++
                progressCountDiv.textContent = inProgressCounter
            break
            case 'Finished':
                inReadCounter++
                readCountDiv.textContent = inReadCounter
            break
            case 'In Future':
                inFutureCounter++
                futureCountDiv.textContent = inFutureCounter
            break
        }
    }

}


// Create an array of sample book instances
const sampleBooks = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 310, 'Finished'),
    new Book('1984', 'George Orwell', 328, 'In Progress'),
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, 'Finished'),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 214, 'In Future'),
    new Book('Pride and Prejudice', 'Jane Austen', 279, 'In Progress'),
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'Finished'),
];

const myLibrary = new Library()


document.querySelector('form').addEventListener('submit', (event) => {
    const newBookData = new FormData(event.target)

    let name = newBookData.get('name')
    let author = newBookData.get('author')
    let pages = newBookData.get('pages')
    let status = newBookData.get('status')

    if (name != '' && author != '' && pages != '' && status != '') {
        const newBook = new Book(name, author, pages, status)
        myLibrary.addBook(newBook)
    }
    event.target.reset()
})



sampleBooks.forEach(e => myLibrary.addBook(e))

// mylib.showBook()
// mylib.removeBook('Eloquent JavaScript')
// mylib.showBook()
// console.log(eloquentJs.name);
// console.log([].length);
