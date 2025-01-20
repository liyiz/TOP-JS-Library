
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

const myLibrary = [];

function Book(id, title, author, pages, read) {
    // the constructor...
    this.id = id;
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
    exampleBooks.forEach((book, index) => { 
        addBookToLibrary(index, book.title, book.author, book.pages, book.read);
    })

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
        const newBookTitle = document.getElementById('title').value;
        const newBookAuthor = document.getElementById('author').value;
        const newBookPages = parseInt(document.getElementById('pages').value);
        const newBookIsRead = document.getElementById('isRead').checked;

        const id = document.querySelector('#cards').childElementCount + 1; //#todohere

        console.log(id, newBookTitle, newBookAuthor, newBookPages, newBookIsRead);

        addBookToLibrary(id, newBookTitle, newBookAuthor, newBookPages, newBookIsRead);
    })



});


function addBookToLibrary(id, title, author, pages, read) {
    const newBook = new Book(id, title, author, pages, read)
    // add newBook to array
    console.log(newBook);
    myLibrary.push(newBook);
    renderBooksToDOM();
}

function renderBooksToDOM() {

    const container = document.querySelector('#cards');
    // Check how many children container has
    const startIndex = container.childElementCount;
    console.log(`card-container has ${startIndex} children`)
    // .slice from the correct index, then .forEach 
    myLibrary.slice(startIndex).forEach((book) => { displayBookCard(book)});

}

function createBookCard(book) {
    // create book card html from object data
    let bookCard = document.createElement('div');
    // Set a unique id number to help reference it? Is that needed? 
    // bookCard.setAttribute('data-id', '');
    
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
    checkmark.setAttribute('data-id', book.id);
    checkmark.addEventListener('click', () => {
        // Create a function to put this code into like updateIsRead(), in the Book prototype?
        console.log("Time to toggle!");
        console.log(`We should be looking at book id: ${book.id}`);
        book.toggleRead(book.id);
        bookCard.classList.toggle('isRead', book.read);
    });

    let deletebtn = document.createElement('div');
    deletebtn.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-circle-outline</title><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V10H16M13.5,6L14.5,7H17V9H7V7H9.5L10.5,6H13.5Z" /></svg>';
    deletebtn.classList.add('deletebtn');
    deletebtn.setAttribute('data-id', book.id);
    deletebtn.addEventListener('click', () => {
        // Also put this into its own function maybe
        console.log("Delete button clicked!");
        console.log(`We should be looking at book id: ${book.id}`);
        // TODO trigger function to delete book - consider adding to Book prototype as shared function?
        bookCard.remove(); // This does indeed removes the correct element - but I'm not sure how it knows to remove itself TOSTUDY
        // DOM element is removed, but will also need to remove from myLibrary
        // filter the array with a search, then slice or splice the array to remove the deleted book from myLibrary
    })

    let actionbtns = document.createElement('div');
    actionbtns.classList.add('actionbtns');
    actionbtns.appendChild(deletebtn);
    actionbtns.appendChild(checkmark);

    bookCard.appendChild(details);
    bookCard.classList.add('card');

    bookCard.classList.toggle('isRead', book.read);
    bookCard.appendChild(actionbtns);
    

    // <div class="card isRead">
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
    const container = document.querySelector('#cards');
    const currentBook = createBookCard(book)
    container.appendChild(currentBook);
}