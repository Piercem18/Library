//empty array
let myLibrary = [];

//function that declares inputs of Book and its values
function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}
//function that adds the book to the library
function addBookToLibrary(Title, Author, Pages, Read) {
  let addBook = new Book(Title, Author, Pages, Read);
  myLibrary.push(addBook);
}
//I added two books to the library to start
addBookToLibrary("hobbit", "Tolkien", "295 pages", "No");
addBookToLibrary("harry potter", "jk rowling", "500 pages", "Yes");

//function that displays the books on the page
function displayBooksOnPage() {
    const books = document.querySelector(".books");
    const removeDivs = document.querySelectorAll(".card");
  
    for (let i = 0; i < removeDivs.length; i++) {
      removeDivs[i].remove();
    }
    //for every array element a card is created
    let index=0;
    myLibrary.forEach((myLibrarys, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      books.appendChild(card);
  //this takes the values aka key and nasically prints the text on the card
      for (let key in myLibrarys) {
        const para = document.createElement("p");
        para.textContent = `${key}: ${myLibrarys[key]}`;
        card.appendChild(para);
      }

 //toggle button
const readStatusButton=document.createElement("button");
readStatusButton.classList.add("read-status-button");
readStatusButton.textContent="Change Read Status";
readStatusButton.dataset.linkedArray=index;

card.appendChild(readStatusButton); 

readStatusButton.addEventListener("click", toggleReadStatus);

console.log("show me the dataset link back to the array FOR READ STATUS BUTTON...", readStatusButton.dataset.linkedArray);



//this changes the text on the Card to say wether its been read or not
function toggleReadStatus(){
    let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
    Book.prototype=Object.create(Book.prototype);
    const toggleBook = new Book();
    console.log("What is the toggle initial value?...", myLibrary[parseInt(retrieveBookToToggle)].Read);


if ((myLibrary[parseInt(retrieveBookToToggle)].Read)=="Yes"){
    toggleBook.Read="No";
    myLibrary[parseInt(retrieveBookToToggle)].Read=toggleBook.Read;
}else if
    ((myLibrary[parseInt(retrieveBookToToggle)].Read)=="No"){
        toggleBook.Read="Yes";
        myLibrary[parseInt(retrieveBookToToggle)].Read=toggleBook.Read
    };
displayBooksOnPage();
};

//delete button
    const removeBookButton = document.createElement("img");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.src = "trash-can-outline.svg";
    removeBookButton.dataset.linkedArray = index;

    card.appendChild(removeBookButton);

    removeBookButton.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBooksOnPage();
    }
  });
}

//this button drops down the form making it visible
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
  document.getElementById("bookForm").style.display = "";
}

//this button submits the form's information, translates text input to value
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

//this makes sure an empty form cannot be submitted/accepted
function intakeFormData(event) {
  event.preventDefault();
  let Title = document.getElementById("Title").value;
  let Author = document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;

  if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
    return;
  }
  addBookToLibrary(Title, Author, Pages, Read);
  //the form is automatically cleared after submission
  clearForm();
  //the card is displayed immediately after submission
  displayBooksOnPage();
}
//this button clears the form text
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("Title").value = "";
  document.getElementById("Author").value = "";
  document.getElementById("Pages").value = "";
  document.getElementById("Read").value = "";
}

displayBooksOnPage();

