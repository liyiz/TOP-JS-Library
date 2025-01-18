
const exampleBooks = [
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

const myLibrary = [

];

function Book(title, author, pages, read) {
    // the constructor...
    this.author = author; // string
    this.title = title; // string
    this.pages = pages; // number
    this.read = read; // boolean
    this.toggleRead = function() {
        this.read = !this.read;
        // call a function to update the respective book's card in .card-container
        // updateReadStatus(this, this.read);
    };
    this.info = function() {
        console.table(this);
    }
}


function updateReadStatus(status) {
    // Will target the correct element to update the checkmark element 
    // to the correct .finished or .unfinished class
}
  

document.addEventListener('DOMContentLoaded',() => {
    console.log('Go code, go!');

    // add example books to myLibrary
    exampleBooks.forEach((book) => { 
        const currBook = new Book(book.title, book.author, book.pages, book.read);
        myLibrary.push(currBook);
    })

    // TODO: Create function that will check how many children book container
    // already has and to start looping from that index of the array.
    renderBooksToDOM();

    const addButton = document.getElementById("newbook");
    const closeButtonIcon = document.getElementById("close");
    const closeButtonWord = document.getElementById("cancel");
    const dialog = document.getElementById("dialog");
    //dialog.returnValue = "favAnimal"; TODO: how to retrieve info from modal form
    function openCheck(dialog) {
        if (dialog.open) {
          console.log("Dialog open");
        } else {
          console.log("Dialog closed");
        }
    }

    // newbook button opens a modal dialog
    addButton.addEventListener('click', () => {
        dialog.showModal();
        openCheck(dialog);
    });
    
    // Form close button closes the dialog box
    closeButtonIcon.addEventListener('click', () => {
        dialog.close();
        openCheck(dialog);
    });
    // Form alternate close button closes the dialog box
    closeButtonWord.addEventListener('click', () => {
        dialog.close();
        openCheck(dialog);
    });

    
    const formDetails = document.getElementById('getDetails');
    formDetails.addEventListener('click', () => {
        let newBookTitle = document.getElementById('title').value;
        let newBookAuthor = document.getElementById('author').value;
        let newBookPages = parseInt(document.getElementById('pages').value);
        let newBookFinished = document.getElementById('finished').checked;
        console.log(newBookTitle, newBookAuthor, newBookPages, newBookFinished);

        addBookToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookFinished);
    })



});


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)
    // add newBook to array
    console.log(newBook);
    myLibrary.push(newBook);
    renderBooksToDOM();
}

function renderBooksToDOM() {

    const container = document.querySelector('.card-container');
    // Check how many children container has
    const startIndex = container.childElementCount;
    console.log(`card-container has ${startIndex} children`)
    // .slice from the correct index, then .forEach 
    myLibrary.slice(startIndex).forEach((book) => { displayBookCard(book)});

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
    let details = document.createElement('div');
    details.classList.add('details');
    details.appendChild(title);
    details.appendChild(author);
    details.appendChild(pages);


    let checkmark = document.createElement('div');
    checkmark.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-circle-outline</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>';
    checkmark.classList.add('checkmark');
    checkmark.addEventListener('click', () => {
        console.log("Time to toggle!");
        book.toggleRead();
    });

    let deletebtn = document.createElement('div');
    deletebtn.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle-outline</title><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V10H16M13.5,6L14.5,7H17V9H7V7H9.5L10.5,6H13.5Z" /></svg>';
    deletebtn.classList.add('deletebtn');
    deletebtn.addEventListener('click', () => {
        console.log("Delete button clicked!");
        // TODO trigger function to delete book - consider adding to Book prototype
    })

    let actionbtns = document.createElement('div');
    actionbtns.classList.add('actionbtns');
    actionbtns.appendChild(checkmark);
    actionbtns.appendChild(deletebtn);

    bookCard.appendChild(details);
    bookCard.classList.add('card');

    // book.read ? bookCard.classList.add('finished') : bookCard.classList.add('unfinished');
    bookCard.classList.add(book.read ? 'finished' : 'unfinished');
    bookCard.appendChild(actionbtns);
    

    // <div class="card unfinished">
    //      <div class="details">
    //          <p class="title">title</p>
    //          <p class="author">author</p>
    //          <p class="pages">pages</p>
    //      </div>
    //      <div class="checkmark">
    //          <svg></svg>
    //      </div>
    // </div>
    return bookCard;
}

function displayBookCard(book) {
    // add book card's html to DOM
    console.log(createBookCard(book).outerHTML);
    const container = document.querySelector('.card-container');
    const currentBook = createBookCard(book)
    container.appendChild(currentBook);
}