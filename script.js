const library = [];

function Book(title, pageCount, read) {
  this.title = title;
  this.pageCount = pageCount;
  this.read = read;
}

function addBookToLibrary(book) {
  library.push(book);
}