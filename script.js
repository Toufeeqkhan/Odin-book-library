//Show or unShow the dialog-box

const newBookButton = document.getElementById("newBookButton")
let dialogDiv = document.getElementById("dialog")

newBookButton.addEventListener('click',() => {
    dialogDiv.showModal()
})
let books = []
//get the data from the New Book Dialog
document.querySelector('form').addEventListener('submit',(event)=>{
// event.preventDefault()

const newBookData = new FormData(event.target)
const name = newBookData.get('name')
const author = newBookData.get('author')
const pages = newBookData.get('pages')
const status = newBookData.get('status')

books.push({
    name,
    author,
    pages,
    status
})


document.getElementById('display').textContent = 
    `Added >> ${name} by ${author}.\nthe book has ${pages} pages.\nThe Status is: ${status}`
    console.log(books);
    console.log(`Added >> ${books[0].name} by ${books[0].author}, the book has ${books[0].pages} and the Status is: ${books[0].status}`);
})



