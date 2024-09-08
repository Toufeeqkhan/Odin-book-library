import { Book } from "./components/Book.js";
import { Library } from "./components/Library.js";
import { setupDialog } from "./components/Dialog.js";
import { sampleBooks } from "./components/SampleBooks.js";


const myLibrary = new Library()
sampleBooks.forEach(e => myLibrary.addBook(e))


setupDialog()

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