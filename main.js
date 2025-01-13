


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
    let htmlString = `
    <div class="card">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages}</p>
        <p class="read">${book.read}</p>
    </div>
    `;

    // <div class="card">
    // <p class="title">title</p>
    // <p class="author">author</p>
    // <p class="pages">pages</p>
    // <p class="read">yes/no</p>
    // </div>

    return htmlString;
}

function displayBookCard(book) {
    // add book card's html to DOM
    console.log(createBookCard(book));

}