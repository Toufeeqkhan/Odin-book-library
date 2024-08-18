let count = 0
let inProgressCounter = 0
let inReadCounter = 0
let inFutureCounter = 0
//Show or unShow the dialog-box
document.addEventListener("DOMContentLoaded", function() {
    dialogDiv.classList.add('show')
    dialogDiv.showModal()
});

const bookContainer = document.getElementById("books-container")
const newBookButton = document.getElementById("newBookButton")
let dialogDiv = document.getElementById("dialog")
let bookCountDiv = document.getElementById("book-count")
let progressCountDiv = document.getElementById("progress-count")
let readCountDiv = document.getElementById("read-count")
let futureCountDiv = document.getElementById("future-count")


newBookButton.addEventListener('click', () => {
    dialogDiv.showModal()
})

let books = []

function Book(name, author, pages, status) {
    this.name = name
    this.author = author
    this.pages = pages
    this.status = status
}

//get the data from the New Book Dialog
document.querySelector('form').addEventListener('submit', (event) => {
    const newBookData = new FormData(event.target)

    let name = newBookData.get('name')
    let author = newBookData.get('author')
    let pages = newBookData.get('pages')
    let status = newBookData.get('status')

    if (name != '' && author != '' && pages != '' && status != '') {

        const newBook = new Book(name, author, pages, status)
        books.push(newBook)
        showBooks(count)
        count++
      
    }
    event.target.reset()
})


function paraAdder(name, className, underText, parent) {
    console.log(name, className, underText,);

    let currentOne = document.createElement('p')
    if (name == 'pages') {
        currentOne.textContent = `#${underText}`
    } else if (name == 'author') {
        if (underText === '') {
            currentOne.textContent = `~Unknown Author`
        } else {
            currentOne.textContent = `By ${underText}`
        }
    } else if(name === 'status') {
        if(underText === 'In Progress') inProgressCounter++
        else if(underText === 'In Future') inFutureCounter++
        else inReadCounter++
        currentOne.textContent = `${underText}`
    }else{
        currentOne.textContent = `${underText}`
    }
    currentOne.classList.add(className)
    parent.appendChild(currentOne)
}

function showBooks(count) {
    if (books.length === 0) {
        return 1
    }
    let newBook = document.createElement('div')
    newBook.classList.add('book')
    paraAdder('name', 'book-name', books[count].name, newBook)
    paraAdder('author', 'book-author', books[count].author, newBook)
    paraAdder('pages', 'book-page', books[count].pages, newBook)
    paraAdder('status', 'book-status', books[count].status, newBook)
    bookContainer.appendChild(newBook)

    bookCountDiv.innerText = `Books: ${count + 1}`
    progressCountDiv.innerText = `In Progress: ${inProgressCounter}`
    readCountDiv.innerText = `Finished: ${inReadCounter}`
    futureCountDiv.innerText = `In Future: ${inFutureCounter}`
}




