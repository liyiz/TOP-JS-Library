


const myLibrary = [
    {
        author: 'Yaa Gyasi',
        title: 'Homegoing',
        pages: 305,
        read: false
    },
    {
        author: 'R.F. Kuang',
        title: 'Yellowface',
        pages: 323,
        read: true
    },
    {
        author: 'Becky Chambers',
        title: 'A Psalm for the Wild-Built',
        pages: 151,
        read: true
    }
];

document.addEventListener('DOMContentLoaded',() => {
    console.log('Go code, go!');

    myLibrary.forEach((book) => { displayBookCard(book)});
});


function Book(author, title, pages, read) {
  // the constructor...
  this.author = author; // string
  this.title = title; // string
  this.pages = pages; // number
  this.read = read; // boolean
}

function addBookToLibrary() {
  // do stuff here
}

function createBookCard(book) {
    // create book card html from object data
    let bookCard = document.createElement('div');
    
    let title = document.createElement('p'); 
    title.textContent = book.title;
    title.classList.add('book-title');
    let author = document.createElement('p'); 
    author.textContent = `by ${book.author}`;
    author.classList.add('book-author');
    let pages = document.createElement('p'); 
    pages.textContent = `${book.pages} pages`;
    pages.classList.add('book-pages');
    
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);

    bookCard.classList.add('card');

    // book.read ? bookCard.classList.add('finished') : bookCard.classList.add('unfinished');
    bookCard.classList.add(book.read ? 'finished' : 'unfinished');

    // <div class="card">
    // <p class="title">title</p>
    // <p class="author">author</p>
    // <p class="pages">pages</p>
    // <p class="read">yes/no</p>
    // </div>
    return bookCard;
}

function displayBookCard(book) {
    // add book card's html to DOM
    console.log(createBookCard(book).outerHTML);
    const container = document.querySelector('#container');
    const currentBook = createBookCard(book)
    container.appendChild(currentBook);
}