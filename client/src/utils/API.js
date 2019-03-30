import axios from "axios";

export default {
  // return the book from the googleapi
  searchBooks: function(query) {
    console.log("In searchBooks: " + query)
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
},

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  
  // Gets all the saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
};
