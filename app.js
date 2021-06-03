 class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

  }
}
  const form = document.querySelector("form");
  const tbody = document.querySelector("tbody");
  const table = document.querySelector("table");
  const readBtn = document.getElementById("readBtn");

  function addEntryBook(e){
    //adds fields to book object
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageNum = document.getElementById('page-num').value;
    const readStatus = document.getElementById("read").checked; //true or false value
    
    //making a new book object
    const book = new Book(title, author, pageNum, readStatus);

    displayBooks(book);

    
  }
  function displayBooks(book){
    let read=""; 
    if (book.readStatus){
      read = "read";
    }
    else {
      read = "not read";
    }
    tbody.innerHTML += `
      <tr>
          <td> ${book.title}</td>
          <td> ${book.author}</td>
          <td> ${book.pages}</td>
          <td> <button class="readBtn"> ${read}</button></td> 
          <td> <button class="deleteBtn"> Delete</button></td>

      </tr>
    `;

    // after displaying, clear form fielda
    clearFields();
  }
  function clearFields(){
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('page-num').value = "";
    document.getElementById("read").checked = false;
  }
  function deleteBook(e){
    if (e.target.classList.contains('deleteBtn')){
      const btn = e.target;
      btn.closest("tr").remove();
    }
    else{
      return;
    }
  }
function changeReadStatus(e){
  if(e.target.classList.contains('readBtn')){ //if clicked on read btn
    let btn = e.target;
    if(btn.innerHTML == "read"){ //changes read status
      btn.innerHTML = "not read";
    }
    else {
      btn.innerHTML = "read";
    }
  }
  else{
    return;
  }
}
  form.addEventListener("submit", addEntryBook);
  table.addEventListener("click", changeReadStatus); //since the btn is created dynamically must add event listener to table
  table.addEventListener("click", deleteBook);