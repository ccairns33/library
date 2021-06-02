 function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    
}
  var book;
  const form = document.querySelector("form");
  const tbody = document.querySelector("tbody");
  const table = document.querySelector("table");
  function addEntry(e){
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageNum = document.getElementById('page-num').value;
    const readStatus = document.getElementById("read").checked; //true or false value
    
    book = new Book(title, author, pageNum, readStatus);
    //making a new book object
    tbody.innerHTML += `
      <tr>
          <td> ${title}</td>
          <td> ${author}</td>
          <td> ${pageNum}</td>
          <td> </td> 
          <td> <button class="deleteBtn"> Delete</button></td>

      </tr>
    `;
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

  form.addEventListener("submit", addEntry);
  table.addEventListener("click", deleteBook);
