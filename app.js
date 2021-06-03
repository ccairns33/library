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
  const container = document.getElementById("container");


  function addEntryBook(e){
    //adds fields to book object
    e.preventDefault(); // prevents refresh upon submit
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageNum = document.getElementById('page-num').value;
    const readStatus = document.getElementById("read").checked; //true or false value
    
    //validate fields, make sure they aren't empty

    if (title == "" || author == "" || pageNum == ""){
      showAlert("Please fill in all fields.", "invalid");
      
    }
    else {
      //making a new book object
      const book = new Book(title, author, pageNum, readStatus);

      displayBooks(book);
    }

    

    
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

  function showAlert(message, className) {
    //used for both success and validation failure
    const div = document.createElement('div');
    div.className = `alert alert-${className} d-flex alert-spacing`
    div.appendChild(document.createTextNode(message));
    const btn = document.createElement("button");
    btn.innerHTML = "Close"
    btn.className = "alert-btn"
    div.appendChild(btn);
    const container = document.querySelector(".container");
    const form = document.querySelector("form");
    container.insertBefore(div, form);

    //remove in 3 seconds

    setTimeout(() => document.querySelector('.alert').remove(), 3500);
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
function deleteAlert(e){
  if (e.target.classList.contains('alert-btn')){
    const btn = e.target;
    btn.parentElement.remove();
  }
  else{
    return;
  }
}
  form.addEventListener("submit", addEntryBook);
  table.addEventListener("click", changeReadStatus); //since the btn is created dynamically must add event listener to table
  table.addEventListener("click", deleteBook);
  container.addEventListener("click", deleteAlert);