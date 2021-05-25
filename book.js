function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function() {
      return (title + " ," + author + " ," + pages + " , read: " + readStatus);
    }
  }
  