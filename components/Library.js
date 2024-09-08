
const bookContainer = document.getElementById("books-container"),
    bookCountDiv = document.getElementById("book-count"),
    progressCountDiv = document.getElementById("progress-count"),
    readCountDiv = document.getElementById("read-count"),
    futureCountDiv = document.getElementById("future-count")

    let count = 0,
    inProgressCounter = 0,
    inReadCounter = 0,
    inFutureCounter = 0

export class Library {
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

    count(book) {
        count++
        bookCountDiv.textContent = count
        switch (book.status) {
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